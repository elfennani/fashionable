import supabase from "@/utils/supabase";
import React from "react";
import BoutiqueFilters from "./boutique-filters";

const BoutiqueFilterLoader = async () => {
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
    <BoutiqueFilters
      categories={categories}
      colors={colors}
      minPrice={cheapestProduct.price}
      maxPrice={mostExpensiveProduct.price}
      maxProducts={count}
    />
  );
};

export default BoutiqueFilterLoader;
