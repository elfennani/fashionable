/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TextPill from "./text-pill";
import { Product } from "@/types/Product";
import { memo } from "react";
import { isProductNew } from "@/utils/functions";
import WishlistIconButton from "../features/wishlist/components/wishlist-icon-button";
import ProductCartButton from "@/features/shopping-cart/components/product-cart-button";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  return (
    <div className="group">
      <div className="aspect-[4/5] relative overflow-hidden">
        <Link href={`/produit/${product.id}`}>
          <img
            src={product.images[0].url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          />
          <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex flex-col justify-between">
            <div className="p-4 md:p-6 flex flex-col gap-1 md:gap-2 items-end">
              {isProductNew(product) && (
                <TextPill className="bg-green-700">Nouveau</TextPill>
              )}
              {!!product.base_price && (
                <TextPill className="bg-rose-400">Promo</TextPill>
              )}
            </div>
          </div>
        </Link>
        <ProductCartButton productId={product.id} />
      </div>

      <div className="py-2 md:py-4 flex gap-2 items-start">
        <Link href={`/produit/${product.id}`} className="flex-1">
          <div>
            <h3 className="text-sm md:text-lg lg:text-2xl group-hover:underline underline-offset-4 font-light tracking-tighter">
              {product.name}
            </h3>
            <p>
              <span className="text-sm md:text-lg text-rose-400 tracking-tight mr-2">
                {product.price} MAD
              </span>
              {product.base_price && (
                <span className="text-neutral-400 line-through max-md:text-xs">
                  {product.base_price} MAD
                </span>
              )}
            </p>
          </div>
        </Link>
        <WishlistIconButton productId={product.id} />
      </div>
    </div>
  );
}

export default memo(ProductCard);
