import { Request, Response } from "express";
import { ProductServices } from "./product.service";
import productVaildationSchema from "./product.zod.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    //Product vaildation using Zod

    const zodParseData = productVaildationSchema.parse(product);

    //Calling Createproduct Service
    const result = await ProductServices.Createproduct(zodParseData);

    //send response

    res.status(200).json({
      success: true,
      massage: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      massage: "Faild to create product!",
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    res.status(200).json({
      success: true,
      massage: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "Products data not found",
    });
  }
};
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    //Calling getSingleProduct Service
    const result = await ProductServices.deleteSingleProduct(productId);

    //send response
    res.status(200).json({
      success: true,
      massage: "Product deleted successfully!",
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      massage: "Product not found",
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;

    //Calling getSingleProduct Service
    const result = await ProductServices.getSingleProduct(productId);

    //send response
    res.status(200).json({
      success: true,
      massage: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "Product not found",
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    //User vaildation using Zod

    const productId = req.params.productId;

    const zodParseData = productVaildationSchema.parse(product);

    //Calling Createuser Service
    const result = await ProductServices.updateSingleProduct(
      productId,
      zodParseData
    );

    //Get a user data
    const userResult = await ProductServices.getSingleProduct(productId);
    //send response

    res.status(200).json({
      success: true,
      massage: "User updated successfully!",
      data: userResult,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "User not found",
      error: {
        code: 404,
        description: "User not found!",
      },
    });
  }
};
export const ProductControllers = {
  createProduct,
  getAllProducts,
  deleteSingleProduct,
  getSingleProduct,
};
