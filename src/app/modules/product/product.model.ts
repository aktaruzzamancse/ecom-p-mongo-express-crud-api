import { Schema, model } from "mongoose";
import { Product, inventory, variants} from "./product.interface";

const inventorySchema = new Schema<inventory>({
  quantity: {
    type: Number,
    trim: true,
    required: [true, "Quantity is required"],
  },
  inStock: {
    type: Boolean,
    trim: true,
    default: true,
  },
 
});

const variantsSchema = new Schema<variants>({
  type: {
    type: String,
    trim: true,
    required: [true, "Type is required"],
  },
  value: {
    type: String,
    trim: true,
    required: [true, "Value is required"],
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, "Product Name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Inventory is required"],
  },
  price: {
    type: Number,
    trim: true,
    required: [true, "Price is required"],
  },
  tags: [String],
  variants: [variantsSchema],
});

export const ProductModel = model<Product>("Product", productSchema);
