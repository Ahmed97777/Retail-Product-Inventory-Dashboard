import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be positive"),
  category: z.string().min(1, "Category is required"),
  stock: z.number().int().nonnegative("Stock cannot be negative"),
});

export const CreateProductSchema = ProductSchema.omit({ id: true });

export const UpdateProductSchema = CreateProductSchema.partial();

export type TProduct = z.infer<typeof ProductSchema>;
export type TCreateProduct = z.infer<typeof CreateProductSchema>;
export type TUpdateProduct = z.infer<typeof UpdateProductSchema>;
