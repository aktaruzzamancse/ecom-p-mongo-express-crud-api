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

export const ProductControllers = {
  createProduct,
  getAllProducts,
};
