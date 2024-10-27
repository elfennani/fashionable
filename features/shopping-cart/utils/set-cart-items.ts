import { CartItem } from "../types/CartItem";

const setCartItems = (items: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(items));
};

export default setCartItems;
