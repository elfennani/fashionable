import Button from "@/components/button";
import { usePrefs } from "@/features/preferences/components/prefs-provider";
import CartProduct from "@/features/shopping-cart/types/CartProduct";
import { cn } from "@/lib/utils";
import supabase from "@/utils/supabase";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useMemo, useState } from "react";

type Props = {
  products: CartProduct[];
  disabled: boolean;
  city?: string;
  province?: string;
  promocode?: string;
};

const OrderSummary = ({
  products,
  disabled,
  city,
  province,
  ...props
}: Props) => {
  const prefs = usePrefs();
  const [promocode, setPromocode] = useState(props.promocode);

  useEffect(() => {
    const timeout = setTimeout(() => setPromocode(props.promocode), 500);

    return () => clearTimeout(timeout);
  }, [props.promocode]);

  const { data: promotion, isPending } = useQuery({
    queryKey: ["promo", promocode?.toUpperCase()],
    queryFn: async () => {
      if (!promocode?.toUpperCase()?.trim()) {
        throw new Error("Promo code invalide");
      }
      const { data, error } = await supabase
        .from("promotions")
        .select("*")
        .eq("code", promocode?.toUpperCase())
        .eq("active", true)
        .maybeSingle()
        .throwOnError();

      if (error || !data || data.uses >= (data.limit_uses ?? Infinity))
        return null;

      return data;
    },
    enabled: !!promocode,
  });

  const subtotal = useMemo(
    () =>
      products?.reduce((prev, curr) => prev + curr.price * curr.quantity, 0) ??
      0,
    [products]
  );

  const tax = useMemo(() => {
    if (!city) {
      return -1;
    }

    let taxFree = Number(prefs["tax-free"]);

    if (isNaN(taxFree)) taxFree = Infinity;

    if (subtotal > taxFree) {
      return 0;
    }

    const tax =
      prefs["tax-prefs"]
        .filter(
          (taxPref) =>
            (taxPref.type === "city" && taxPref.name === city) ||
            (taxPref.type === "province" && taxPref.name === province) ||
            taxPref.type === "default"
        )
        .sort((a, b) => {
          const priority = { city: 1, province: 2, default: 3 };
          return priority[a.type] - priority[b.type];
        })
        .at(0)?.tax ?? 0;

    return tax;
  }, [prefs, city, province, subtotal]);

  const [total, promoActive, reduction]: [number, boolean, number] =
    useMemo(() => {
      if (
        promotion?.type === "percentage" &&
        (promotion.min_order_total ?? -Infinity) <= subtotal + tax
      ) {
        const cut = Math.min(
          (tax + subtotal) * (promotion.value / 100),
          promotion.max_cut ?? Infinity
        );

        return [tax + subtotal - cut, true, cut];
      }

      if (
        promotion?.type === "fixed" &&
        (promotion.min_order_total ?? -Infinity) <= subtotal + tax
      ) {
        return [
          Math.max(subtotal + tax - promotion.value, 10),
          true,
          promotion.value,
        ];
      }

      return [tax + subtotal, false, 0];
    }, [subtotal, tax, promotion]);

  return (
    <div
      className={cn(
        "p-6 gap-6 bg-rose-50 flex flex-col",
        isPending && !!promocode && "opacity-50"
      )}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-xs uppercase">Sous-total</h3>
          <p className="font-bold">{subtotal} MAD</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <h3 className="text-xs uppercase">LIVRAISON</h3>
          <p className="font-bold">{tax === -1 ? ".." : tax} MAD</p>
        </div>
        {!!reduction && (
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-xs uppercase">Reduction</h3>
            <p className="font-bold">- {tax === -1 ? ".." : reduction} MAD</p>
          </div>
        )}
      </div>
      <hr className="border-neutral-200" />
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-xl sm:text-2xl font-bold uppercase">
          TOTAL{" "}
          {promoActive && (
            <sup className="text-xs opacity-75">(avec promotion)</sup>
          )}
        </h3>
        <p className="font-light text-rose-400 text-4xl sm:text-5xl tracking-tighter">
          {tax === -1 ? ".." : total} MAD
        </p>
      </div>
      <Button form="validation-form" type="submit" disabled={disabled}>
        Commander
        <span className="iconify teenyicons--send-outline size-6" />
      </Button>
    </div>
  );
};

export default OrderSummary;
