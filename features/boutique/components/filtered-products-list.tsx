import ProductList from "@/components/product-list";
import React from "react";
import useFilteredProducts from "../hooks/useFilteredProducts";
import useFilters from "../hooks/useFilters";
import Pagination from "./pagination";

const FilteredProductsList = () => {
  const filters = useFilters();
  const { products, maxPages } = useFilteredProducts();

  const page = filters.page;

  return (
    <>
      <ProductList products={products.slice(page * 6, page * 6 + 6)} />
      <Pagination maxPages={maxPages} />
    </>
  );
};

export default FilteredProductsList;
