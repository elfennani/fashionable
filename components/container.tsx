import { cn } from "@/utils/cn";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export default function Container({ children, className, ...props }: Props) {
  return (
    <div
      {...props}
      className={cn("mx-auto w-full max-w-[1264px] px-4 md:px-8", className)}
    >
      {children}
    </div>
  );
}
