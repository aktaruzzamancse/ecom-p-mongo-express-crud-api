import express, { Application } from "express";
import cors from "cors";
import { ProductRouters } from "./app/modules/product/product.route";
import { OrderRouters } from "./app/modules/order/order.route";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//Application Routes
app.use("/api/products", ProductRouters);
app.use("/api/orders", OrderRouters);

//Not Found
app.use(notFound);
export default app;
