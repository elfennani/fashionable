"use client";
import { ProductDetails } from "@/types/ProductDetails";
import React, { useState } from "react";
import Container from "./container";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  product: ProductDetails;
};

type Tab = {
  label: string;
  key: string;
  property: keyof ProductDetails;
};

const tabs: Tab[] = [
  {
    key: "description",
    label: "Description",
    property: "longDescription",
  },
  {
    key: "moreinfo",
    label: "plus d’information",
    property: "specifications",
  },
  {
    key: "livraison",
    label: "livraison",
    property: "delivery",
  },
];

const ProductInfo = ({ product }: Props) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="md:border-b border-b-neutral-200">
      <Container className="py-8 lg:py-16 flex flex-col gap-8 md:gap-16">
        <div className="flex -mx-4 px-4 overflow-x-auto scrollbar-hide items-center md:justify-center gap-8 md:gap-16">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "font-semibold text-neutral-400 uppercase min-w-fit underline-offset-4 transition-colors",
                tab.key == activeTab.key && "text-neutral-700 underline"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 grid-rows-1 ">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeTab.key}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="col-start-1 row-start-1"
            >
              <p>{product[activeTab.property] as string}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default ProductInfo;
