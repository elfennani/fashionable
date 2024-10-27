"use client";
import CounterInput from "@/components/counter-input";
import { Product } from "@/types/Product";
import React, { useState } from "react";
import ProductCartButton from "./product-cart-button";

type Props = {
  product: Product;
};

const ProductInfoFooter = ({ product }: Props) => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <div className="flex gap-10">
        {product.size && (
          <div className="flex flex-col gap-2">
            <p className="font-semibold tracking-tight uppercase">Taille</p>
            <p className="px-6 py-4 border border-neutral-200">
              {product.size}
            </p>
          </div>
        )}
        <CounterInput max={5} onChange={setCounter} />
      </div>
      <div className="flex max-lg:flex-col gap-6 lg:gap-10">
        <div className="lg:self-end">
          {product.base_price && (
            <p className="font-black text-neutral-300 line-through">
              {product.base_price} MAD
            </p>
          )}
          <p className="text-4xl font-light text-rose-400 tracking-tighter">
            {product.price} MAD
          </p>
        </div>
        <ProductCartButton large productId={product.id} quantity={counter} />
      </div>
    </>
  );
};

export default ProductInfoFooter;
