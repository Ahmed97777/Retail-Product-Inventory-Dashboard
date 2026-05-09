import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TProduct } from "./product.schema";

@Entity("products")
export class ProductModel implements TProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price!: number;

  @Column()
  category!: string;

  @Column({ default: 0 })
  stock!: number;
}
