import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
};

export default function SectionTitle({ children, className }: Props) {
  return (
    <h2
      className={cn(
        "flex items-center gap-2 text-center text-balance md:gap-8 font-display text-rose-400 text-2xl md:text-3xl before:block before:h-[0.0625rem] before:flex-1 before:bg-rose-400 after:block after:h-[0.0625rem] after:flex-1 after:bg-rose-400",
        className
      )}
    >
      <span className="max-w-[70%]">{children}</span>
    </h2>
  );
}
