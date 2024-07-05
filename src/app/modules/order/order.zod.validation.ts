import { z } from "zod";
const orderVaildationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export default orderVaildationSchema;
