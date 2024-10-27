import React from "react";
import useCartToggle from "../hooks/use-cart-toggle";

type Props = {
  productId: number;
};

const CartItemRemoveButton = ({ productId }: Props) => {
  const remove = useCartToggle(productId);

  return (
    <button
      className="text-muted-foreground flex gap-2 items-center py-2 px-1 -mx-1"
      onClick={remove}
    >
      <span className="iconify teenyicons--bin-solid size-4" />
      <span className="max-sm:hidden">Retirer</span>
    </button>
  );
};

export default CartItemRemoveButton;
