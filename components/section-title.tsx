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
        "flex items-center gap-4 md:gap-8 font-display text-rose-400 text-2xl md:text-3xl before:block before:h-[1px] before:flex-1 before:bg-rose-400 after:block after:h-[1px] after:flex-1 after:bg-rose-400",
        className
      )}
    >
      {children}
    </h2>
  );
}
