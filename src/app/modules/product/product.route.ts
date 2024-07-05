import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

//ProudctCreate Controller func

router.post("/", ProductControllers.createProduct);
export const ProductRouters = router;
