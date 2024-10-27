import { useQueryClient } from "@tanstack/react-query";

const useWishlistToggle = (productId: number) => {
  const client = useQueryClient();

  return () => {
    let ids: number[] = [];

    if (localStorage.getItem("wishlist")) {
      ids = JSON.parse(localStorage.getItem("wishlist")!);
    }

    if (!Array.isArray(ids) || ids.some((id) => isNaN(Number(id)))) {
      ids = [];
    }

    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        ids.includes(productId)
          ? ids.filter((id) => id != productId)
          : [...ids, productId]
      )
    );

    client.invalidateQueries({ queryKey: ["wishlist"] });
  };
};

export default useWishlistToggle;
