import { Schema, model } from "mongoose";
import { Order } from "./order.interface";
import { ProductModel } from "../product/product.model";
const orderSchema = new Schema<Order>({
  email: {
    type: String,
    trim: true,
    required: [true, "Email is required"],
  },
  productId: {
    type: String,
    required: [true, "ProductId is required"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Price is required"],
  },
  quantity: {
    type: Number,
    trim: true,
    required: [true, "Quantity is required"],
  },
});
// query middleware
orderSchema.post("save", async function (doc, next) {
  const reqQty = doc.quantity;
  console.log(reqQty);
  const product = await ProductModel.findOne({
    _id: doc.productId,
  });
  if (product) {
    const reduceQty = product?.inventory.quantity - reqQty;
    let update = {};
    update = {
      "inventory.quantity": reduceQty,
    };
    if (reduceQty == 0) {
      update = {
        "inventory.quantity": reduceQty,
        "inventory.inStock": false,
      };
    }
    const result = await ProductModel.findOneAndUpdate(
      {
        _id: doc.productId,
      },

      update
    );
  }

  next();
});
export const OrderModel = model<Order>("Order", orderSchema);
