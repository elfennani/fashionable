import { Product } from "@/types/Product";

const MONTH_MILLIS = 1000 * 60 * 60 * 24 * 31;
export function isProductNew(product: Product) {
  return Date.now() - new Date(product.created_at).getTime() < MONTH_MILLIS;
}
