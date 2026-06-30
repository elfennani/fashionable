/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { LucideMoreHorizontal, LucideMoreVertical } from "lucide-react";

type Props = {
  title: string;
  image: string;
  href?: string;
  onClick?: () => void;
  hasSubcategories?: boolean;
};

export default function CategoryCard({
  image,
  title,
  href,
  onClick,
  hasSubcategories,
}: Props) {
  const content = (
    <>
      <div className="relative size-16 md:size-32">
        <img
          src={image}
          alt={title}
          className="size-full rounded-full object-cover"
        />
        {hasSubcategories && (
          <div className="absolute -bottom-1 -right-1 bg-amber-600 text-white rounded-full p-1 border-2 border-white">
            <LucideMoreHorizontal className="max-sm:hidden" />
            <LucideMoreVertical className="sm:hidden max-sm:size-3" />
          </div>
        )}
      </div>
      <span className="max-md:flex-1 capitalize">{title}</span>
      <span className="iconify teenyicons--arrow-right-solid md:hidden" />
    </>
  );

  const className =
    "flex hover:scale-105 transition-transform md:flex-col gap-4 items-center font-light text-lg md:text-2xl md:text-center w-full md:w-auto text-left";

  if (onClick) {
    return (
      <button onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href || "#"} className={className}>
      {content}
    </Link>
  );
}
