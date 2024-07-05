import express, { Application } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.route";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//Application Routes
app.use("/api/products", ProductRouters);

export default app;