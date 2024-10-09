import { cn } from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

const FormInput = (props: Props) => {
  return (
    <input
      {...props}
      className={cn(
        "px-4 py-3 bg-white placeholder:text-neutral-300 border border-transparent invalid:border-pink-500 invalid:text-pink-500 invalid:bg-pink-50",
        props.className
      )}
    />
  );
};

export default FormInput;
