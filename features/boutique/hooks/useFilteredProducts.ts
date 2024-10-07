import { productsMapped } from "@/app/page";
import products from "@/assets/products.json";
import useFilters from "./useFilters";

const useFilteredProducts = () => {
  const filters = useFilters();

  const queryFilter = productsMapped.filter((product) => {
    console.log(filters.query);
    if (filters.query?.trim()) {
      return product.title.toLowerCase().includes(filters.query.toLowerCase());
    }
    return true;
  });

  const categoryFilter = queryFilter.filter((product) => {
    if (!filters.category || filters.category == "all") return true;

    return (
      products.find((p) => p.id == product.id)?.category == filters.category
    );
  });

  const rangeFilter = categoryFilter.filter((product) => {
    const min = Number(filters.min);
    const max = Number(filters.max);

    if (filters.min != null && filters.max != null) {
      return product.price >= min && product.price <= max;
    } else if (filters.min != null) {
      return product.price >= min;
    } else if (filters.max != null) {
      return product.price <= max;
    }

    return true;
  });

  const sorting = rangeFilter.sort((a, b) => {
    if (filters.sorting === "popular") {
      return 0;
    } else if (filters.sorting === "increasing") {
      return a.price - b.price;
    } else if (filters.sorting === "decreasing") {
      return b.price - a.price;
    }

    return 0;
  });

  const maxPrice = categoryFilter.reduce(
    (prev, acc) => (acc.price > prev ? acc.price : prev),
    0
  );
  const minPrice = categoryFilter.reduce(
    (prev, acc) => (acc.price < prev ? acc.price : prev),
    maxPrice
  );

  const maxPages = Math.ceil(rangeFilter.length / 6);

  return { products: sorting, minPrice, maxPages, maxPrice };
};

export default useFilteredProducts;
