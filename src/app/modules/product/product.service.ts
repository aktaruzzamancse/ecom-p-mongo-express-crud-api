import { parse } from "dotenv";
import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const Createproduct = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};
const getAllProducts = async (searchTerm: any) => {
  if (searchTerm != null) {
    console.log(searchTerm);
    const userRegex = new RegExp(searchTerm, "i");
    const result = await ProductModel.find({
      name: userRegex,
      isDeleted: false,
    });
    return result;
  } else {
    const result = await ProductModel.find({ isDeleted: false });
    return result;
  }
};
const deleteSingleProduct = async (productId: string) => {
  const result = await ProductModel.updateOne(
    { _id: productId },
    { isDeleted: true }
  );
  return result;
};

const getSingleProduct = async (productId: string) => {
  const result = await ProductModel.findOne({
    _id: productId,
    isDeleted: false,
  });
  return result;
};

const updateSingleProduct = async (productId: string, product: Product) => {
  const result = await ProductModel.updateOne({ _id: productId }, product);
  return result;
};
export const ProductServices = {
  Createproduct,
  getAllProducts,
  deleteSingleProduct,
  updateSingleProduct,
  getSingleProduct,
};
