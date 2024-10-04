import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1264px] px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
}
