import { cn } from "@/utils/cn";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode | ReactNode[];
  className?: string;
  secondary?: boolean;
  shadow?: boolean;
};

const Button = ({
  children,
  className,
  secondary,
  shadow,
  ...props
}: Props &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >) => {
  return (
    <button
      className={cn(
        "bg-amber-600 px-8 md:px-16 py-5 text-amber-50 disabled:bg-neutral-400 disabled:text-neutral-50 flex tracking-widest font-semibold uppercase items-center justify-center gap-4 sm:gap-6 transition-colors hover:bg-amber-500",
        secondary &&
          "bg-amber-50 hover:bg-amber-100 text-amber-600 hover:text-amber-500",
        shadow && "shadow-lg shadow-amber-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkButton = ({
  children,
  className,
  secondary,
  shadow,
  to,
  ...props
}: Props & { to: string } & LinkProps) => {
  return (
    <Link
      href={to}
      className={cn(
        "bg-amber-600 px-8 md:px-16 py-5 text-amber-50 flex tracking-widest font-semibold uppercase items-center justify-center gap-4 sm:gap-6 transition-colors hover:bg-amber-500",
        secondary &&
          "bg-amber-50 hover:bg-amber-100 text-amber-600 hover:text-amber-500",
        shadow && "shadow-lg shadow-amber-100",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
