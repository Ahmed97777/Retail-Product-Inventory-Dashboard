import api from "@/lib/api";
import {
  TCreateProduct,
  TProduct,
  TUpdateProduct,
} from "@/schemas/product.schema";

export async function fetchProducts() {
  return api.get<TProduct[]>("/products");
}

export async function fetchProductById(id: number) {
  return api.get<TProduct>(`/products/${id}`);
}

export async function createProductRequest(data: TCreateProduct) {
  return api.post<TProduct>("/products", data);
}

export async function updateProductRequest(id: number, data: TUpdateProduct) {
  return api.patch<TProduct>(`/products/${id}`, data);
}

export async function deleteProductRequest(id: number) {
  return api.delete(`/products/${id}`);
}
