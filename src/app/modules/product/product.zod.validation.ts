import { z } from "zod";
const inventoryVaildationSchema = z.object({
  quantity: z.number({
    required_error: "Quantity is required",
    invalid_type_error: "Quantity must be a number",
  }),
  inStock: z.boolean().default(true),
});
const variantsVaildationSchema = z.object({
  type: z.string({
    required_error: "Type is required",
    invalid_type_error: "Type must be a string",
  }),
  value: z.string({
    required_error: "Value is required",
    invalid_type_error: "Value must be a string",
  }),
});
const productVaildationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantsVaildationSchema),
  inventory: inventoryVaildationSchema,
  isDeleted: z.boolean().default(false),
});

export default productVaildationSchema;
