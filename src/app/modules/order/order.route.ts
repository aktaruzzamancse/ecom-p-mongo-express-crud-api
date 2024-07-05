import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

//Proudcts route

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrders);
export const OrderRouters = router;
