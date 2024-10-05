import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
  secondary?: boolean;
  shadow?: boolean;
};

const Button = ({ children, className, secondary, shadow }: Props) => {
  return (
    <button
      className={cn(
        "bg-rose-400 px-8 md:px-16 py-5 text-rose-50 flex tracking-widest font-semibold uppercase items-center justify-center gap-4 sm:gap-6 transition-colors hover:bg-rose-500",
        secondary &&
          "bg-rose-50 hover:bg-rose-100 text-rose-400 hover:text-rose-500",
        shadow && "shadow-lg shadow-rose-100",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
