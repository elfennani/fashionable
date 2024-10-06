"use client";
import products from "@/assets/products.json";
import { cn } from "@/utils/cn";
import useSearchParams from "@/hooks/useSearchParams";
import RangeInput from "./RangeInput";

type Props = object;

const BoutiqueFilters = ({}: Props) => {
  const [params, setParam] = useSearchParams();

  const categories = products
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index)
    .map(
      (category) =>
        [
          category,
          products.filter((p) => p.category == category).length,
        ] as const
    );

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-lg font-semibold">Catégories</h2>
      <ul className="flex flex-col gap-1">
        <button
          onClick={() => setParam("category", "all")}
          className={cn(
            "flex justify-between items-center opacity-50 text-sm py-1",
            (!params.has("category") || params.get("category") == "all") &&
              "font-semibold text-rose-400 opacity-100"
          )}
        >
          Tous les produit <span>{products.length}</span>
        </button>
        {categories.map(([category, length]) => (
          <li key={category}>
            <button
              onClick={() => setParam("category", category)}
              className={cn(
                "flex w-full justify-between items-baseline opacity-50 text-sm py-1",
                params.get("category") == category &&
                  "font-semibold text-rose-400 opacity-100"
              )}
            >
              {category} <span>{length}</span>
            </button>
          </li>
        ))}
      </ul>
      <hr className="border-neutral-200 mx-4" />
      <h2 className="text-lg font-semibold capitalize">filtrer par</h2>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold opacity-80">Prix</h3>
        <RangeInput />
      </div>
      <div>
        <h3 className="font-semibold opacity-80">Colour</h3>
      </div>
    </div>
  );
};

export default BoutiqueFilters;
