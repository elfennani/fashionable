import { motion } from "framer-motion";
import useInCartQuantity from "@/features/shopping-cart/hooks/use-in-cart-quantity";
import useCartUpdate from "@/features/shopping-cart/hooks/use-cart-update";

const CartQuantityInput = ({ productId }: { productId: number }) => {
  const { data } = useInCartQuantity(productId);
  const update = useCartUpdate(productId);

  const quantity = data ?? 1;

  return (
    <div className="border border-neutral-200 flex max-sm:flex-1 items-center">
      <button
        className="flex items-center justify-center p-2 disabled:opacity-50"
        onClick={() => update({ productId, quantity: quantity - 1 })}
        disabled={quantity == 1}
      >
        <span className="iconify teenyicons--minus-circle-outline" />
      </button>
      <p className="uppercase text-sm flex-1 max-sm:text-center">
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.2 }}
          className="font-semibold text-rose-400"
        >
          {quantity ?? 0}
        </motion.span>{" "}
        pièce
      </p>
      <button
        className="flex items-center justify-center p-2 disabled:opacity-50"
        onClick={() => update({ productId, quantity: quantity + 1 })}
        disabled={quantity == 5}
      >
        <span className="iconify teenyicons--plus-circle-outline" />
      </button>
    </div>
  );
};

export default CartQuantityInput;
