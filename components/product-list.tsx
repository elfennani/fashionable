import { memo } from "react";
import ProductCard from "./product-card";

import { Product } from "@/types/Product";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default memo(ProductList);
