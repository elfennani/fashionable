import { useQuery } from "@tanstack/react-query";

const useIsWishlisted = (id: number) => {
  return useQuery({
    queryKey: ["wishlist", id],
    queryFn: () => {
      let ids: number[] = [];

      if (localStorage.getItem("wishlist")) {
        ids = JSON.parse(localStorage.getItem("wishlist")!);
      }

      if (!Array.isArray(ids) || ids.some((id) => isNaN(Number(id)))) {
        ids = [];
      }

      return ids.includes(id);
    },
  });
};

export default useIsWishlisted;
