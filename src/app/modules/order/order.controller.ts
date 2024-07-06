import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import { ProductServices } from "../product/product.service";
import orderVaildationSchema from "./order.zod.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    //Order vaildation using Zod

    const zodParseData = orderVaildationSchema.parse(order);

    const productId = order?.productId;
    console.log(productId);

    //Calling getSingleProduct Service
    const proresult = await ProductServices.getSingleProduct(productId);
    if (proresult) {
      const reqQty = zodParseData.quantity;
      if (reqQty > proresult?.inventory.quantity) {
        res.status(500).json({
          success: false,
          massage: "Insufficient quantity available in inventory",
        });
      }
    }

    console.log(proresult);

    //Calling Createorder Service
    const result = await OrderServices.Createorder(zodParseData);

    //send response

    res.status(200).json({
      success: true,
      massage: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      massage: "Faild to create Order!",
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    let result = {};
    if (req.query?.email) {
      result = await OrderServices.getAllOrders(req.query.email as string);
    } else {
      result = await OrderServices.getAllOrders(null);
    }

    res.status(200).json({
      success: true,
      massage: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      massage: "Orders data not found",
    });
  }
};
export const OrderControllers = {
  createOrder,
  getAllOrders,
};
