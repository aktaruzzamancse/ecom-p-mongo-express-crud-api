import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const Createorder = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrders = async (searchTerm: any) => {
  if (searchTerm != null) {
    const result = await OrderModel.find({
      email: searchTerm,
    });
    return result;
  } else {
    const result = await OrderModel.find({});
    return result;
  }
};

export const OrderServices = {
  Createorder,
  getAllOrders,
};
