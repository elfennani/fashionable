"use client";
import products from "@/assets/products.json";
import { cn } from "@/utils/cn";
import useSearchParams from "@/features/boutique/hooks/useSearchParams";
import RangeInput from "./RangeInput";
import useFilteredProducts from "../hooks/useFilteredProducts";

const colors = [
  "#F87171",
  "#FB923C",
  "#FACC15",
  "#A3E635",
  "#38BDF8",
  "#A78BFA",
  "#4ADE80",
  "#E879F9",
];

const parseNumberParam = (value: string | null, defaultNumber: number) => {
  const number = Number(value);
  if (Number.isNaN(number) || value == undefined) return defaultNumber;

  return number;
};

const BoutiqueFilters = () => {
  const [params, setParam] = useSearchParams();
  const { minPrice, maxPrice } = useFilteredProducts();

  const activeColor = params.get("color");
  const min = parseNumberParam(params.get("min"), 0);
  const max = parseNumberParam(params.get("max"), 100);
  const values = [min, max] as const;

  const setValues = ([min, max]: [number, number]) => {
    setParam("min", min.toString());
    setParam("max", max.toString());
  };

  const setActiveColor = (color: string | null) =>
    setParam("color", color ?? "all");

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
          {activeColor && activeColor != "all" && (
            <button
              className="text-rose-400"
              onClick={() => setActiveColor(null)}
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
                color == activeColor && "opacity-100"
              )}
              style={{
                backgroundColor: color,
                // the hex number at end (66) means 40% alpha
                boxShadow:
                  activeColor == color ? `0 4px 6.3px ${color}66` : undefined,
              }}
              onClick={() =>
                setActiveColor(activeColor == color ? null : color)
              }
              key={color}
            >
              {activeColor == color && (
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
