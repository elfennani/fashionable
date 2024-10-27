import { useQuery } from "@tanstack/react-query";
import getCartItems from "../utils/get-cart-items";

const useIsInCart = (id: number) => {
  return useQuery({
    queryKey: ["cart", id],
    queryFn: () => {
      const items = getCartItems();

      return items.some((item) => item.productId == id);
    },
  });
};

export default useIsInCart;
