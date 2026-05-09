import { AppDataSource } from "../../database/db";
import { ProductModel } from "./product.model";
import { TCreateProduct, TUpdateProduct, TProduct } from "./product.schema";

export class ProductRepository {
  private repo = AppDataSource.getRepository(ProductModel);

  async create(data: TCreateProduct): Promise<TProduct> {
    const product = this.repo.create(data);
    return await this.repo.save(product);
  }

  async findAll(): Promise<TProduct[]> {
    return await this.repo.find();
  }

  async findById(id: number): Promise<TProduct | null> {
    return await this.repo.findOneBy({ id });
  }

  async update(id: number, data: TUpdateProduct): Promise<TProduct | null> {
    await this.repo.update(id, data);
    return await this.findById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
