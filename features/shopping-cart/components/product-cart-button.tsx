"use client";
import React from "react";
import useIsInCart from "../hooks/use-is-in-cart";
import { cn } from "@/lib/utils";
import useCartToggle from "../hooks/use-cart-toggle";
import Button from "@/components/button";

type Props = {
  productId: number;
  large?: boolean;
  quantity?: number;
};

const ProductCartButton = ({
  productId,
  large = false,
  quantity = 1,
}: Props) => {
  const { data: isInCart } = useIsInCart(productId);
  const toggle = useCartToggle(productId, quantity);

  if (large) {
    return (
      <Button secondary={isInCart} className="flex-1 !px-6" onClick={toggle}>
        <span
          className={cn(
            "iconify size-6",
            isInCart
              ? "teenyicons--bag-minus-outline"
              : "teenyicons--bag-plus-outline"
          )}
        />
        {isInCart ? "Ajouté au panier" : "Ajouter au panier"}
      </Button>
    );
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "flex absolute bottom-0 right-0 md:w-full max-md:self-end translate-y-full font-semibold group-hover:translate-y-0 transition-all items-center justify-center p-4 md:px-8 md:py-5 gap-6 uppercase tracking-wider bg-rose-50 md:bg-rose-400 hover:bg-rose-100 hover:md:bg-rose-500 text-rose-400 md:text-rose-50",
        isInCart &&
          "text-rose-50 bg-rose-400 hover:bg-rose-500 md:bg-rose-50 hover:md:bg-rose-100 md:text-rose-400"
      )}
    >
      <span
        className={cn(
          "iconify size-4 md:size-6",
          isInCart
            ? "teenyicons--bag-minus-outline"
            : "teenyicons--bag-plus-outline"
        )}
      />
      <span className="max-md:hidden">
        {isInCart ? "Retirer de panier" : "Ajouter au panier"}
      </span>
    </button>
  );
};

export default ProductCartButton;
