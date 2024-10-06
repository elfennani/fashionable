/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import TextPill from "./text-pill";
import { motion } from "framer-motion";
import { Product } from "@/types/Product";

type Props = {
  product: Product;
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.div variants={item} className="group">
      <div className="aspect-[4/5] relative overflow-hidden">
        <Link href={`/produit/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex flex-col justify-between">
            <div className="p-4 md:p-6 flex flex-col gap-1 md:gap-2 items-end">
              {product.new && (
                <TextPill className="bg-green-700">Nouveau</TextPill>
              )}
              {!!product.basePrice && (
                <TextPill className="bg-rose-400">Promo</TextPill>
              )}
            </div>
          </div>
        </Link>
        <button className="flex absolute bottom-0 right-0 md:w-full max-md:self-end translate-y-full font-semibold group-hover:translate-y-0 transition-all items-center justify-center p-4 md:px-8 md:py-5 gap-6 uppercase tracking-wider bg-rose-50 md:bg-rose-400 hover:bg-rose-100 hover:md:bg-rose-500 text-rose-400 md:text-rose-50">
          <span className="iconify teenyicons--bag-plus-outline size-4 md:size-6" />
          <span className="max-md:hidden">Ajouter au panier</span>
        </button>
      </div>

      <div className="py-2 md:py-4 flex gap-2 items-start">
        <Link href={`/produit/${product.id}`} className="flex-1">
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl group-hover:underline underline-offset-4 font-light tracking-tighter">
              {product.title}
            </h3>
            <p>
              <span className="text-sm md:text-lg text-rose-400 tracking-tight mr-2">
                {product.price} MAD
              </span>
              {product.basePrice && (
                <span className="text-neutral-400 line-through max-md:text-xs">
                  {product.basePrice} MAD
                </span>
              )}
            </p>
          </div>
        </Link>
        <button className="mt-1 ">
          {product.wishlisted ? (
            <span className="iconify teenyicons--heart-solid text-rose-400 size-4 md:size-6" />
          ) : (
            <span className="iconify teenyicons--heart-outline size-4 md:size-6 text-neutral-400" />
          )}
        </button>
      </div>
    </motion.div>
  );
}
