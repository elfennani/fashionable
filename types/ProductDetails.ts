import { Product } from "./Product";

export interface ProductDetails extends Product {
  category: string; 
  description: string;
  ugs: string;
  available: boolean;
  size: string;
  inCart: boolean;
  images: string[];
  longDescription: string;
  specifications: string;
  delivery: string;
  similar: Product[];
}
