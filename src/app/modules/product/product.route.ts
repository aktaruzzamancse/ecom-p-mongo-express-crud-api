import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

//Proudcts route

router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.delete("/:productId", ProductControllers.deleteSingleProduct);
export const ProductRouters = router;
