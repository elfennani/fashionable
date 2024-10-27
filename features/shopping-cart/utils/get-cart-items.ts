import { z } from "zod";
import { CartItem, cartItemSchema } from "../types/CartItem";

export default function getCartItems(): CartItem[] {
  let items: CartItem[] = [];

  if (localStorage.getItem("cart")) {
    items = JSON.parse(localStorage.getItem("cart")!);
  }

  const { success } = z.array(cartItemSchema).safeParse(items);

  if (!success) return [];

  return items;
}
