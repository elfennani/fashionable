"use client";
import ProductList from "@/components/product-list";
import Pagination from "./pagination";
import { useQuery } from "@tanstack/react-query";
import useFilters from "../hooks/useFilters";
import supabase from "@/utils/supabase";
import { Product } from "@/types/Product";
import { Skeleton } from "@/components/ui/skeleton";
import { div } from "framer-motion/client";

const FilteredProductsList = () => {
  const [filter] = useFilters();
  const { data, isPending, isError } = useQuery<Product[]>({
    queryKey: ["products", "list", "filtered", filter],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 300));
      let request = supabase
        .from("product")
        .select("*, images ( * ), category!inner(*)", { count: "estimated" })
        .eq("archived", false);

      if (filter) {
        switch (filter.sort) {
          case "popular":
            request = request.order("created_at", { ascending: false });
            break;

          case "increasing":
            request = request.order("price", { ascending: true });
            break;

          case "decreasing":
            request = request.order("price", { ascending: false });
            break;

          default:
            request = request.order("created_at", { ascending: false });
            break;
        }

        if (filter.search?.trim()) {
          const query = "'" + filter.search.split(" ").join("' | '") + "'";
          console.log(query);
          request = request.textSearch("name", query, {});
        }

        if (filter.category) {
          request = request.eq("category_id", filter.category);
        }

        if (filter.color) {
          request = request.eq("color_id", filter.color);
        }

        if (filter.min) {
          request = request.gte("price", filter.min);
        }

        if (filter.max) {
          request = request.lte("price", filter.max);
        }
      }

      const { data, count } = await request.throwOnError();

      if (data) return data;

      return [];
    },
  });

  if (isPending) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div>
              <Skeleton className="aspect-[4/5] relative overflow-hidden rounded-none" />
              <div className="py-2 md:py-4 space-y-1 items-start">
                <Skeleton className="w-full h-5 md:h-7 lg:h-8" />
                <Skeleton className="w-1/2 h-4 md:h-6" />
              </div>
            </div>
          ))}
      </div>
    );
  }

  if (isError) {
    return <div>Failed to get products</div>;
  }

  return (
    <>
      <ProductList products={data} />
      <Pagination maxPages={1} />
    </>
  );
};

export default FilteredProductsList;
