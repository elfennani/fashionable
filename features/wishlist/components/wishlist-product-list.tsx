"use client";
import ProductList from "@/components/product-list";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect } from "react";
import useWishList from "../hooks/useWishList";

const WishlistProductList = () => {
  const { data: products, isPending, isError, error } = useWishList();

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
  }, [isError, error]);

  if (isPending) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <Skeleton className="aspect-[4/5] relative overflow-hidden rounded-none" />
              <div className="py-2 md:py-4 space-y-1 items-start">
                <Skeleton className="w-full h-5 md:h-7 lg:h-8" />
                <Skeleton className="w-1/2 h-4 md:h-6" />
              </div>
            </div>
          ))}
      </div>
    );
  }

  if (isError) {
    return (
      <Alert variant={"destructive"}>
        <span className="iconify teenyicons--exclamation-circle-outline size-4" />
        <AlertTitle>Échec</AlertTitle>
        <AlertDescription>
          Échec du chargement des produits de la liste de souhaits
        </AlertDescription>
      </Alert>
    );
  }

  if (!products.length) {
    return (
      <div className="p-32 flex items-center justify-center text-neutral-500">
        Aucun à afficher
      </div>
    );
  }

  return <ProductList products={products} />;
};

export default WishlistProductList;
