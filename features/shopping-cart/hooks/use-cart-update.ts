import queryClient from "@/utils/react-query";
import { useRef } from "react";
import { CartItem } from "../types/CartItem";
import getCartItems from "../utils/get-cart-items";
import setCartItems from "../utils/set-cart-items";

const useCartUpdate = (productId: number) => {
  const timeout = useRef<NodeJS.Timeout>(null);

  return (item: CartItem) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }

    const items = getCartItems();

    if (items.some((i) => i.productId == productId)) {
      setCartItems(items.map((i) => (i.productId == productId ? item : i)));
    } else {
      setCartItems([...items, item]);
    }

    queryClient.invalidateQueries({ queryKey: ["cart", "quantity"] });

    timeout.current = setTimeout(() => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    }, 300);
  };
};

export default useCartUpdate;
