import { Schema, model } from "mongoose";
import { Order } from "./order.interface";

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

export const OrderModel = model<Order>("Order", orderSchema);
