"use client";
import useIsWishlisted from "@/features/wishlist/hooks/use-is-wishlisted";
import useWishlistToggle from "@/features/wishlist/hooks/use-wishlist-toggle";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  productId: number;
};

const WishlistButton = ({ productId }: Props) => {
  const { data: isWishlisted } = useIsWishlisted(productId);
  const toggle = useWishlistToggle(productId);

  return (
    <button
      onClick={toggle}
      className={cn(
        "flex items-center max-md:self-center gap-4 uppercase hover:underline py-4 underline-offset-4",
        isWishlisted && "text-rose-400 font-bold"
      )}
    >
      <span
        className={cn(
          "iconify teenyicons--heart-outline size-6",
          isWishlisted && "teenyicons--heart-solid"
        )}
      />
      {isWishlisted ? "Retirer de wishlist" : "Ajouter à wishlist"}
    </button>
  );
};

export default WishlistButton;
