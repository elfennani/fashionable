"use client";
import { ProductDetails } from "@/types/ProductDetails";
import React from "react";
import Container from "./container";

type Props = {
  product: ProductDetails;
};

const ProductInfo = ({}: Props) => {
  return (
    <div className="border-b border-b-neutral-200">
      <Container>
        <div className="flex items-center justify-center gap gap-16">
          <button className="font-semibold text-neutral-400">
            Description
          </button>
          <button className="font-semibold text-neutral-400">
            plus d’information
          </button>
          <button className="font-semibold text-neutral-400">livraison</button>
        </div>
      </Container>
    </div>
  );
};

export default ProductInfo;
