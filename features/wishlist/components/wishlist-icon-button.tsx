"use client";
import useIsWishlisted from "@/features/wishlist/hooks/use-is-wishlisted";
import useWishlistToggle from "@/features/wishlist/hooks/use-wishlist-toggle";
import React from "react";

type Props = {
  productId: number;
};

const WishlistIconButton = ({ productId }: Props) => {
  const { data: isWishlisted } = useIsWishlisted(productId);
  const toggle = useWishlistToggle(productId);

  return (
    <button onClick={toggle} className="mt-1 ">
      {isWishlisted == true ? (
        <span className="iconify teenyicons--heart-solid text-rose-400 size-4 md:size-6" />
      ) : (
        <span className="iconify teenyicons--heart-outline size-4 md:size-6 text-neutral-400" />
      )}
    </button>
  );
};

export default WishlistIconButton;
