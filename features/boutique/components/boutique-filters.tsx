"use client";
import Category from "@/types/Category";
import { Color } from "@/types/Color";
import { cn } from "@/utils/cn";
import useFilters from "../hooks/useFilters";
import RangeInput from "./RangeInput";

export type FilterProps = {
  categories: Category[];
  colors: Color[];
  minPrice: number;
  maxPrice: number;
  maxProducts: number;
  className?: string;
};

const BoutiqueFilters = ({
  categories,
  colors,
  maxPrice,
  minPrice,
  className,
  maxProducts,
}: FilterProps) => {
  // const [params, setParam] = useSearchParams();
  const [filters, setFilter] = useFilters();

  const values = [filters.min ?? minPrice, filters.max ?? maxPrice] as const;

  const setValues = ([min, max]: [number, number]) => {
    if (min == minPrice) setFilter("min", undefined);
    else if (min != filters.min) setFilter("min", min);

    if (max == maxPrice) setFilter("max", undefined);
    else if (max != filters.max) setFilter("max", max);
  };

  return (
    <div className={cn("flex flex-col gap-8", className)}>
      <h2 className="text-lg font-semibold">Catégories</h2>
      <ul className="flex flex-col gap-1">
        <button
          onClick={() => setFilter("category", undefined)}
          className={cn(
            "flex justify-between items-center opacity-50 text-sm py-1",
            !filters.category && "font-semibold text-rose-400 opacity-100"
          )}
        >
          Tous les produit <span>{maxProducts}</span>
        </button>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => setFilter("category", category.id)}
              className={cn(
                "flex w-full justify-between items-baseline opacity-50 text-sm py-1",
                filters.category == category.id &&
                  "font-semibold text-rose-400 opacity-100"
              )}
            >
              {category.name} <span>{category.reference_count}</span>
            </button>
          </li>
        ))}
      </ul>
      <hr className="border-neutral-200 mx-4" />
      <h2 className="text-lg font-semibold capitalize">filtrer par</h2>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold opacity-80">Prix</h3>
        <RangeInput
          values={values}
          onChange={setValues}
          min={minPrice}
          max={maxPrice}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="font-semibold opacity-80">Colour</h3>
          {filters.color != null && (
            <button
              className="text-rose-400"
              onClick={() => setFilter("color", undefined)}
            >
              annuler
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {colors.map((color) => (
            <button
              className={cn(
                "size-8 rounded-full opacity-50 flex items-center justify-center transition-all",
                color.id === filters.color && "opacity-100"
              )}
              style={{
                backgroundColor: color.value,
                // the hex number at end (66) means 40% alpha
                boxShadow:
                  filters.color === color.id
                    ? `0 4px 6.3px ${color}66`
                    : undefined,
              }}
              onClick={() =>
                setFilter(
                  "color",
                  filters.color === color.id ? undefined : color.id
                )
              }
              key={color.id}
            >
              {filters.color === color.id && (
                <span className="iconify heroicons-outline--check bg-white size-6" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoutiqueFilters;
