import React from "react";
import SearchInput from "./search-input";
import SortingSelect from "./sorting-select";
import FiltersButton from "./filters-button";
import FilteredProductsList from "./filtered-products-list";
import BoutiqueFilterLoader from "./boutique-filter-loader";
import supabase from "@/utils/supabase";
import BoutiqueFilters from "./boutique-filters";

const BoutiqueContent = async () => {
  const { data: categories } = await supabase
    .rpc("get_categories_unarchived")
    .throwOnError();
  const { data: colors } = await supabase.rpc("get_colors").throwOnError();
  const { data: cheapestProduct } = await supabase
    .from("product")
    .select()
    .eq("archived", false)
    .order("price", { ascending: true })
    .limit(1)
    .single()
    .throwOnError();
  const { data: mostExpensiveProduct } = await supabase
    .from("product")
    .select()
    .eq("archived", false)
    .order("price", { ascending: false })
    .limit(1)
    .single()
    .throwOnError();
  const { count } = await supabase
    .from("product")
    .select("*", { count: "estimated", head: true })
    .throwOnError();

  if (
    !categories ||
    !colors ||
    !cheapestProduct ||
    !mostExpensiveProduct ||
    count == null
  )
    throw new Error("Failed to load required info");

  return (
    <>
      <div className="max-lg:hidden">
        <BoutiqueFilters
          categories={categories}
          colors={colors}
          minPrice={cheapestProduct.price}
          maxPrice={mostExpensiveProduct.price}
          maxProducts={count}
        />
      </div>
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex max-lg:flex-col-reverse gap-4 lg:gap-6 lg:items-center">
          <div className="flex flex-1 xl:items-center gap-2 xl:gap-6 flex-col xl:flex-row">
            <SearchInput />
          </div>
          <div className="flex flex-wrap max-lg:flex-1 gap-2 sm:gap-6 lg:gap-0 items-center">
            <label htmlFor="sorting" className="font-light">
              Trier par:
            </label>
            <SortingSelect />
            <div className="h-4/5 w-px bg-neutral-200" />
            <FiltersButton
              categories={categories}
              colors={colors}
              minPrice={cheapestProduct.price}
              maxPrice={mostExpensiveProduct.price}
              maxProducts={count}
            />
          </div>
        </div>
        <FilteredProductsList />
      </div>
    </>
  );
};

export default BoutiqueContent;
