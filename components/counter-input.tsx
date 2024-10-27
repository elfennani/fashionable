"use client";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

type Props = {
  max: number;
  onChange?(value: number): void;
};

const CounterInput = ({ max, onChange }: Props) => {
  const [counter, setCounter] = useState(1);

  const increment = useCallback(() => {
    setCounter((c) => {
      if (c + 1 > max) {
        return c;
      }

      onChange?.(c + 1);
      return c + 1;
    });
  }, [setCounter, max, onChange]);

  const decrement = useCallback(() => {
    setCounter((c) => {
      if (c - 1 <= 0) {
        return c;
      }

      onChange?.(c - 1);
      return c - 1;
    });
  }, [setCounter, onChange]);

  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold tracking-tight uppercase">QTE</p>
      <div className="border border-neutral-200 flex">
        <button
          className="flex items-center justify-center px-4 disabled:opacity-50"
          onClick={decrement}
          disabled={counter == 1}
        >
          <span className="iconify teenyicons--minus-circle-outline" />
        </button>
        <p className="px-3 py-4 uppercase flex items-baseline gap-2">
          <motion.span
            key={counter}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.2 }}
            className="font-semibold text-rose-400 text-xl"
          >
            {counter}
          </motion.span>
          pièce
        </p>
        <button
          className="flex items-center justify-center px-4 disabled:opacity-50"
          onClick={increment}
          disabled={counter == max}
        >
          <span className="iconify teenyicons--plus-circle-outline" />
        </button>
      </div>
    </div>
  );
};

export default CounterInput;
