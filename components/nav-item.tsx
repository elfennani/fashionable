"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

type NavItemProps = {
  href: string;
  label: string;
  anyActive?: boolean;
};

function NavItem(props: NavItemProps) {
  const path = usePathname();
  let isActive = props.href != "/" && path.startsWith(props.href);

  if (path == "/" && props.href == "/") 
    isActive = true;

  return (
    <Link
      className={cn(
        "text-lg py-1 uppercase border-b-2 border-transparent hover:border-b-gray-700 transition-colors duration-200",
        isActive && "text-rose-400 border-b-2 !border-b-rose-400"
      )}
      href={props.href}
    >
      {props.label}
    </Link>
  );
}

export default NavItem;
