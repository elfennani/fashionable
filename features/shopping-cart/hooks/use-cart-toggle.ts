import queryClient from "@/utils/react-query";
import getCartItems from "../utils/get-cart-items";
import setCartItems from "../utils/set-cart-items";

const useCartToggle = (productId: number, quantity: number = 1) => {
  return () => {
    const items = getCartItems();

    if (items.some((i) => i.productId == productId)) {
      setCartItems(items.filter((i) => i.productId !== productId));
    } else {
      setCartItems([...items, { productId, quantity }]);
    }

    queryClient.invalidateQueries({ queryKey: ["cart"] });
  };
};

export default useCartToggle;
