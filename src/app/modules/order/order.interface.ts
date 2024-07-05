import { Schema, model, connect, ObjectId } from "mongoose";
export type Order = {
  email: string;
  productId: string;
  price: number;
  quantity: number;
};
