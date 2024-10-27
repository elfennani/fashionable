import { Product } from "@/types/Product";
import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";

const useWishList = () => {
  return useQuery<Product[]>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      let ids: number[] = [];

      if (localStorage.getItem("wishlist")) {
        ids = JSON.parse(localStorage.getItem("wishlist")!);
      }

      if (!Array.isArray(ids) || ids.some((id) => isNaN(Number(id)))) {
        ids = [];
      }

      const { data, error } = await supabase
        .from("product")
        .select("*, images ( * ), category!inner(*)")
        .eq("archived", false)
        .in("id", ids);

      if (error) throw error;

      return data;
    },
  });
};

export default useWishList;
