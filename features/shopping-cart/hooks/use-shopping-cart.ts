import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";
import CartProduct from "../types/CartProduct";
import getCartItems from "../utils/get-cart-items";
import queryClient from "@/utils/react-query";

const useShoppingCart = () => {
  return useQuery<CartProduct[]>(
    {
      queryKey: ["cart"],
      queryFn: async () => {
        const items = getCartItems();

        const { data, error } = await supabase
          .from("product")
          .select("*, images ( * ), category!inner(*)")
          .eq("archived", false)
          .in(
            "id",
            items.map((i) => i.productId)
          );

        if (error) throw error;

        return data.map((product) => {
          const quantity = items.find(
            (i) => i.productId == product.id
          )!.quantity;
          return { ...product, quantity };
        });
      },
    },
    queryClient
  );
};

export default useShoppingCart;
