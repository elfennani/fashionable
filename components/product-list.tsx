import React from "react";
import ProductCard from "./product-card";

function ProductList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
      <ProductCard
        title="Sac à Dos Urbain"
        image="https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price={299}
        isNew
        isInWishlist={false}
      />
      <ProductCard
        title="Montre Classique en Cuir"
        image="https://images.unsplash.com/photo-1560079616-a788c0a654e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price={299}
        undiscountedPrice={350}
        isNew
        isInWishlist={false}
      />
      <ProductCard
        title="Sac à Dos Urbain"
        image="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        price={299}
        isNew
        isInWishlist={false}
      />
    </div>
  );
}

export default ProductList;
