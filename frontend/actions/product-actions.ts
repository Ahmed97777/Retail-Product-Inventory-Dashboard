"use server";

import { revalidatePath } from "next/cache";

import {
  fetchProducts,
  fetchProductById,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "@/services/product.service";

import {
  ProductSchema,
  CreateProductSchema,
  UpdateProductSchema,
  TProduct,
  TCreateProduct,
  TUpdateProduct,
} from "@/schemas/product.schema";

import { ActionResult } from "@/types/product.types";

import { getErrorMessage } from "@/lib/error-handler";

export async function getProducts(): Promise<ActionResult<TProduct[]>> {
  try {
    const response = await fetchProducts();

    // Validate backend response
    const validatedData = ProductSchema.array().parse(response.data);

    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to fetch products"),
    };
  }
}

export async function getProductById(
  id: number,
): Promise<ActionResult<TProduct>> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid product ID");
    }

    const response = await fetchProductById(id);

    const validatedData = ProductSchema.parse(response.data);

    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to fetch product"),
    };
  }
}

export async function createProduct(
  data: TCreateProduct,
): Promise<ActionResult<TProduct>> {
  try {
    const validatedInput = CreateProductSchema.parse(data);

    const response = await createProductRequest(validatedInput);

    const validatedData = ProductSchema.parse(response.data);

    revalidatePath("/products");

    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to create product"),
    };
  }
}

export async function updateProduct(
  id: number,
  data: TUpdateProduct,
): Promise<ActionResult<TProduct>> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid product ID");
    }

    const validatedInput = UpdateProductSchema.parse(data);

    const response = await updateProductRequest(id, validatedInput);

    const validatedData = ProductSchema.parse(response.data);

    revalidatePath("/products");
    revalidatePath(`/products/${id}`);

    return {
      success: true,
      data: validatedData,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to update product"),
    };
  }
}

export async function deleteProduct(id: number): Promise<ActionResult<void>> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid product ID");
    }

    await deleteProductRequest(id);

    revalidatePath("/products");
    revalidatePath(`/products/${id}`);

    return {
      success: true,
      data: undefined,
    };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to delete product"),
    };
  }
}
