"use client";
import { Product } from "@/types/Product";
import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./product-card";

type Props = {
  products: Product[];
  delay?: number;
  stagger?: number;
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedProductList = ({
  delay = 0.2,
  stagger = 0.15,
  products,
}: Props) => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8"
    >
      {products.map((product) => (
        <motion.div key={product.id} variants={item}>
          <ProductCard product={product} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedProductList;
