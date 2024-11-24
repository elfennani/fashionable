/* eslint-disable @next/next/no-img-element */
"use client";

import { LinkButton } from "@/components/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CartQuantityInput from "@/features/shopping-cart/components/cart-quantity-input";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import useShoppingCart from "../hooks/use-shopping-cart";
import CartItemRemoveButton from "./cart-item-remove-button";
import { SheetClose } from "@/components/ui/sheet";

const CartSidebarContent = () => {
  const { data: products, isPending, isError, error } = useShoppingCart();

  const subtotal = useMemo(
    () =>
      products?.reduce((prev, curr) => prev + curr.price * curr.quantity, 0) ??
      0,
    [products]
  );

  useEffect(() => {
    if (isError) {
      console.error(error);
    }
  }, [isError, error]);

  if (isError) {
    return (
      <Alert variant={"destructive"}>
        <span className="iconify teenyicons--exclamation-circle-outline size-4" />
        <AlertTitle>Échec</AlertTitle>
        <AlertDescription>
          Échec du chargement des produits de panier
        </AlertDescription>
      </Alert>
    );
  }

  if (isPending) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-[6.25rem]" />
        <Skeleton className="h-[6.25rem]" />
        <Skeleton className="h-[6.25rem]" />
        <Skeleton className="h-[6.25rem]" />
      </div>
    );
  }

  return (
    <div className="space-y-0 sm:space-y-6 py-2">
      {products.length == 0 && (
        <Card className="h-[6.25rem] shadow-none">
          <CardContent className="p-4 flex items-center justify-center h-full text-xs text-neutral-500">
            Rien à afficher
          </CardContent>
        </Card>
      )}
      {products.map((product) => (
        <div
          key={product.id}
          className="grid max-sm:[&:not(:last-child)]:border-b border-border max-sm:py-4 grid-cols-[2.5rem_1fr] sm:grid-cols-[5rem_1fr] gap-2 sm:gap-4 items-start"
        >
          <div className="aspect-[4/5] w-10 sm:w-20 border-border/25 border">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="size-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-4">
            <div className="flex max-sm:flex-col gap-1 sm:gap-2">
              <div className="sm:flex-1">
                <SheetClose asChild>
                  <Link href={`/produit/${product.id}`}>
                    <h1 className="sm:text-lg font-light tracking-tight line-clamp-1">
                      {product.name}
                    </h1>
                  </Link>
                </SheetClose>
                <p className="font-medium text-xs sm:text-sm">
                  {product.price} MAD •{" "}
                  <span
                    className={cn(
                      "uppercase",
                      product.status == "disponible"
                        ? "text-green-500"
                        : "text-red-500"
                    )}
                  >
                    {product.status}
                  </span>
                </p>
              </div>
              <span className="font-bold max-sm:text-sm sm:leading-7">
                {product.price * product.quantity} MAD
              </span>
            </div>
            <div className="flex sm:justify-between gap-4 items-center">
              <CartQuantityInput productId={product.id} />
              <CartItemRemoveButton productId={product.id} />
            </div>
          </div>
        </div>
      ))}
      {products.length != 0 && (
        <footer>
          <div className="space-y-4 py-4 border-border border-t">
            <div className="flex items-center justify-between gap-2">
              <h4 className="uppercase text-lg sm:text-2xl">Sous-total</h4>
              <p className="font-light text-rose-400 text-2xl sm:text-4xl tracking-tighter">
                {subtotal} MAD
              </p>
            </div>
            <SheetClose asChild>
              <LinkButton
                to="/validation"
                className="!px-4 max-sm:py-4 w-full text-xs sm:text-sm"
              >
                procéder à paiement
                <span className="iconify teenyicons--arrow-right-outline size-4" />
              </LinkButton>
            </SheetClose>
          </div>
        </footer>
      )}
    </div>
  );
};

export default CartSidebarContent;
