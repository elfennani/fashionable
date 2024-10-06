/* eslint-disable @next/next/no-img-element */
"use client";
import { ProductDetails } from "@/types/ProductDetails";
import React, { useState } from "react";
import TextPill from "./text-pill";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Props = {
  product: ProductDetails;
};

const ProductImageSlideshow = ({ product }: Props) => {
  const [index, setIndex] = useState(0);

  const increment = () =>
    setIndex((i) => (i == product.images.length - 1 ? 0 : i + 1));

  const decrement = () =>
    setIndex((i) => (i == 0 ? product.images.length - 1 : i - 1));

  return (
    <div className="flex max-lg:flex-col-reverse gap-4 lg:items-center">
      <div className="flex lg:flex-col gap-4">
        {product.images.map((image, i) => (
          <button key={image} onClick={() => setIndex(i)}>
            <img
              className={cn(
                "h-20 overflow-hidden lg:w-20 opacity-50 aspect-[4/5] transition-opacity object-cover bg-neutral-100",
                i == index && "opacity-100"
              )}
              src={image}
              alt={`${product.title} ${i}`}
            />
          </button>
        ))}
      </div>
      <div className="aspect-[4/5] relative w-full">
        <div className="grid grid-cols-1 grid-rows-1 aspect-[4/5] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              src={product.images[index]}
              alt={product.title}
              className="w-full h-full object-cover col-start-1 row-start-1 origin-right"
            />
          </AnimatePresence>
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex flex-col justify-between">
          <div className="p-4 md:p-6 flex flex-col gap-1 md:gap-2 items-end">
            {product.new && (
              <TextPill className="bg-green-700">Nouveau</TextPill>
            )}
            {!!product.basePrice && (
              <TextPill className="bg-rose-400">Promo</TextPill>
            )}
          </div>
          <div className="flex gap-4 md:gap-6 items-start p-4 md:p-8">
            <button
              onClick={decrement}
              className="bg-white transition-colors p-3 text-neutral-700  flex items-center justify-center rounded-full"
            >
              <span className="iconify teenyicons--left-outline size-4 md:size-6 block" />
            </button>
            <button
              onClick={increment}
              className="bg-white transition-colors p-3 text-neutral-700  flex items-center justify-center rounded-full"
            >
              <span className="iconify teenyicons--right-outline size-4 md:size-6 block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlideshow;
