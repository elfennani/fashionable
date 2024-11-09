"use client";
import ProductList from "@/components/product-list";
import { useEffect, useMemo } from "react";
import useProductList from "../contexts/product-list-context";
import useFilters from "../hooks/useFilters";
import Pagination from "./pagination";

const FilteredProductsList = () => {
  const [filter, setFilter] = useFilters();
  const products = useProductList();
  const filteredProducts = useMemo(() => {
    let p = products;

    if (filter) {
      switch (filter.sort ?? "POPULAR") {
        case "POPULAR":
          p = p.sort((p_a, p_b) => {
            const { popularity: b, created_at: _a } = p_a;
            const { popularity: a, created_at: _b } = p_b;
            if (b != undefined && a != undefined) return b - a;

            return new Date(_b).getTime() - new Date(_a).getTime();
          });
          break;

        case "PRICE_ASC":
          p = p.sort(({ price: a }, { price: b }) => a - b);
          break;

        case "PRICE_DESC":
          p = p.sort(({ price: a }, { price: b }) => b - a);
          break;
        case "NAME_ASC":
          p = p.sort(({ name: a }, { name: b }) =>
            a.localeCompare(b, undefined, { sensitivity: "base" })
          );
          break;
        case "NAME_DESC":
          p = p
            .sort(({ name: a }, { name: b }) =>
              a.localeCompare(b, undefined, { sensitivity: "base" })
            )
            .reverse();
          break;
        case "DATE_ADDED_DESC":
          p.sort(({ created_at: a }, { created_at: b }) => {
            return new Date(b).getTime() - new Date(a).getTime();
          });
          break;
        case "DATE_ADDED_ASC":
          p.sort(({ created_at: a }, { created_at: b }) => {
            return new Date(a).getTime() - new Date(b).getTime();
          });
          break;
      }

      if (filter.search?.trim()) {
        p = p.filter((product) =>
          filter.search
            ?.trim()
            .split(" ")
            .every((word) =>
              product.name.toLowerCase().includes(word.toLowerCase())
            )
        );
      }

      if (filter.category && filter.category >= 0) {
        p = p.filter((product) => product.category_id == filter.category);
      }

      if (filter.color) {
        p = p.filter((product) => product.color_id == filter.color);
      }

      if (filter.min) {
        p = p.filter((product) => product.price >= filter.min!);
      }

      if (filter.max) {
        p = p.filter((product) => product.price <= filter.max!);
      }
    }

    return p;
  }, [products, filter]);

  const pagedProducts = useMemo(() => {
    const page = Math.max((filter.page ?? 1) - 1, 0);
    return filteredProducts.slice(page * 6, page * 6 + 6);
  }, [filteredProducts, filter]);

  useEffect(() => {
    const maxPages = Math.ceil(filteredProducts.length / 6);

    if ((filter.page ?? 1) > maxPages) {
      setFilter("page", maxPages);
    }
  }, [filter, filteredProducts, setFilter]);

  return (
    <>
      <ProductList products={pagedProducts} />
      <Pagination maxPages={Math.ceil(filteredProducts.length / 6)} />
    </>
  );
};

export default FilteredProductsList;
