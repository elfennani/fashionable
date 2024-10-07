/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { NextPage } from "next";
import PageHeader from "@/components/page-header";
import Container from "@/components/container";
import BoutiqueFilters from "@/components/boutique-filters";
import { useMemo } from "react";
import ProductList from "@/components/product-list";
import { productsMapped } from "../page";
import useFilters from "@/hooks/useFilters";
import productsInfo from "@/assets/products.json";
import Pagination from "@/components/pagination";
import useSearchParams from "@/hooks/useSearchParams";
import useFilteredProducts from "@/hooks/useFilteredProducts";
import SearchInput from "@/components/search-input";

type Props = object;

const sorts = {
  popular: "Populaire",
  increasing: "Croissant",
  decreasing: "Decroissant",
};

const BoutiquePage: NextPage<Props> = ({}) => {
  const [_, setParams] = useSearchParams();
  const filters = useFilters();
  const { maxPages, maxPrice, minPrice, products } = useFilteredProducts();

  const page = filters.page;

  return (
    <main>
      <PageHeader
        title="Explorez Notre Boutique"
        subtitle="Découvrez Nos Collections Uniques et Tendance"
      />

      <Container
        className="grid grid-cols-[16rem_1fr] py-16 gap-16"
        id="content"
      >
        <BoutiqueFilters min={minPrice} max={maxPrice} />
        <div className="flex flex-col gap-12">
          <div className="flex gap-6 items-center">
            <div className="flex flex-1 items-center gap-6">
              <SearchInput />
              <div className="flex-1 font-semibold capitalize">
                <span className="text-rose-400">172</span> produits trouvés
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="sorting" className="font-light">
                Trier par:
              </label>
              <select
                id="sorting"
                className="py-4 px-6 bg-transparent"
                onChange={(e) => setParams("sort", e.target.value)}
              >
                {Object.keys(sorts).map((sort) => (
                  <option key={sort} value={sort}>
                    {sorts[sort as unknown as keyof typeof sorts]}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ProductList products={products.slice(page * 6, page * 6 + 6)} />
          <Pagination maxPages={maxPages} />
        </div>
      </Container>
    </main>
  );
};

export default BoutiquePage;
