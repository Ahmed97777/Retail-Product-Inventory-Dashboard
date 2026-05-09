import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { CreateProductSchema, UpdateProductSchema } from "./product.schema";

export class ProductController {
  private service = new ProductService();

  async create(req: Request, res: Response): Promise<void> {
    try {
      const validated = CreateProductSchema.parse(req.body);
      const product = await this.service.createProduct(validated);
      res.status(201).json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.service.getAllProducts();
      res.status(200).json(products);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const product = await this.service.getProductById(id);
      res.status(200).json(product);
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const validated = UpdateProductSchema.parse(req.body);
      const product = await this.service.updateProduct(id, validated);
      res.status(200).json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      await this.service.deleteProduct(id);
      res.status(204).send();
    } catch (error: any) {
      res.status(404).json({ message: error.message });
    }
  }
}
