export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  basePrice?: number | null;
  new: boolean;
  wishlisted: boolean;
}
