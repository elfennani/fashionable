"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

const CollapsibleText = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <p
        {...props}
        className={cn(
          "line-clamp-3 font-light leading-loose mt-6 mb-2",
          !collapsed && "line-clamp-none",
          props.className
        )}
      />

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="font-semibold text-rose-400 leading-loose underline underline-offset-4"
      >
        {collapsed ? "Lire Plus" : "Lire Moin"}
      </button>
    </>
  );
};

export default CollapsibleText;
