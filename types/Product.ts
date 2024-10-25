import { Database } from "./database.types";

type ProductDB = Database["public"]["Tables"]["product"]["Row"];
type ImageDB = Database["public"]["Tables"]["images"]["Row"];
type CategoryDB = Database["public"]["Tables"]["category"]["Row"];

export interface Product extends ProductDB {
  images: ImageDB[];
  category: CategoryDB;
}
