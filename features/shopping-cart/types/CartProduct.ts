import { Product } from "@/types/Product";

export default interface CartProduct extends Product {
  quantity: number;
}
