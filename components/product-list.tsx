"use client";
import React from "react";
import ProductCard from "./product-card";

import { motion } from "framer-motion";
import { Product } from "@/types/Product";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

function ProductList({ products }: { products: Product[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </motion.div>
  );
}

export default ProductList;
