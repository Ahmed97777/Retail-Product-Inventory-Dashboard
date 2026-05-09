import { ProductRepository } from "./product.repository";
import { TCreateProduct, TUpdateProduct, TProduct } from "./product.schema";

export class ProductService {
  private repository = new ProductRepository();

  async createProduct(data: TCreateProduct): Promise<TProduct> {
    return await this.repository.create(data);
  }

  async getAllProducts(): Promise<TProduct[]> {
    return await this.repository.findAll();
  }

  async getProductById(id: number): Promise<TProduct> {
    const product = await this.repository.findById(id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }

  async updateProduct(id: number, data: TUpdateProduct): Promise<TProduct> {
    const existing = await this.repository.findById(id);
    if (!existing) {
      throw new Error("Product not found");
    }
    const updated = await this.repository.update(id, data);
    return updated!;
  }

  async deleteProduct(id: number): Promise<void> {
    const deleted = await this.repository.delete(id);
    if (!deleted) {
      throw new Error("Product not found");
    }
  }
}
