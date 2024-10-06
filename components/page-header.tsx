"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  contentId?: string;
};

const PageHeader = ({ subtitle, title, contentId = "content" }: Props) => {
  return (
    <div className="px-4 blend sm:px-8 pt-16 sm:pt-32 pb-10 sm:pb-20 gap-16 sm:gap-32 flex items-center flex-col bg-zinc-100">
      <div className="flex flex-col gap-4">
        <h1 className="text-center font-display uppercase text-3xl md:text-4xl lg:text-5xl tracking-widest font-bold">
          {title}
        </h1>
        <p className="text-center md:text-lg uppercase font-light tracking-widest">
          {subtitle}
        </p>
      </div>
      <Link href={`#${contentId}`}>
        <motion.span
          animate={{ y: 20 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="iconify teenyicons--arrow-down-outline size-8 md:size-10"
        />
      </Link>
    </div>
  );
};

export default PageHeader;
