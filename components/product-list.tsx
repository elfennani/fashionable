import { memo } from "react";
import ProductCard from "./product-card";

import { Product } from "@/types/Product";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default memo(ProductList);
