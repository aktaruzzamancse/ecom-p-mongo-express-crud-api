import { Schema, model, connect } from "mongoose";
export type inventory = {
  quantity: number;
  inStock: boolean;
};
export type variants = {
  type: string;
  value: string;
};
export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: variants[];
  inventory: inventory;
  isDeleted: boolean;
};
