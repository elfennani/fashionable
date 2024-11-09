"use client";
import { Product } from "@/types/Product";
import { createContext, ReactNode, useContext } from "react";

export const ProductListContext = createContext<Product[]>([]);
export const ProductListProvider = (props: {
  products: Product[];
  children: ReactNode | ReactNode[];
}) => (
  <ProductListContext.Provider value={props.products}>
    {props.children}
  </ProductListContext.Provider>
);

const useProductList = () => useContext(ProductListContext);

export default useProductList;
