"use client";
import React, { useState } from "react";
import CategoryCard from "./category-card";
import Category from "@/types/Category";
import { AnimatePresence, motion } from "framer-motion";

type SubCategory = Category & {
  lastProductImage: string;
};

type CategoryWithSubs = Category & {
  subCategories: SubCategory[];
};

type Props = {
  categories: CategoryWithSubs[];
};

export default function CategorySection({ categories }: Props) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const selectedCategory = categories.find(
    (cat) => cat.id === selectedCategoryId
  );

  return (
    <div className="flex flex-col gap-8 md:gap-16 items-center">
      <AnimatePresence mode="wait">
        {!selectedCategoryId ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-wrap gap-8 md:gap-16 md:items-center md:justify-center flex-col md:flex-row w-full"
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                image={category.image}
                hasSubcategories={category.subCategories.length > 0}
                onClick={
                  category.subCategories.length > 0
                    ? () => setSelectedCategoryId(category.id)
                    : undefined
                }
                href={
                  category.subCategories.length === 0
                    ? `/boutique?category=${category.id}`
                    : undefined
                }
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="subcategories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col gap-8 w-full items-center"
          >
            <button
              onClick={() => setSelectedCategoryId(null)}
              className="flex items-center gap-2 text-amber-600 hover:underline self-start md:self-center"
            >
              <span className="iconify teenyicons--arrow-left-solid" />
              Retour aux catégories
            </button>
            <div className="flex flex-wrap gap-8 md:gap-16 md:items-center md:justify-center flex-col md:flex-row w-full">
              {selectedCategory?.subCategories.map((sub) => (
                <CategoryCard
                  key={sub.id}
                  title={sub.name}
                  image={sub.lastProductImage}
                  href={`/boutique?category=${sub.id}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
