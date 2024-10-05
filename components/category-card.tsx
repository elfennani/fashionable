/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  href: string;
};

export default function CategoryCard({ image, title, href }: Props) {
  return (
    <Link
      href={href}
      className="flex hover:scale-105 transition-transform md:flex-col gap-4 items-center font-light text-lg md:text-2xl md:text-center"
    >
      <img
        src={image}
        alt={title}
        className="size-16 md:size-32 rounded-full object-cover"
      />
      <span className="max-md:flex-1">{title}</span>
      <span className="iconify teenyicons--arrow-right-solid md:hidden" />
    </Link>
  );
}
