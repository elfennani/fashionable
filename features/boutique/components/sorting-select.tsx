"use client";

import useFilters from "../hooks/useFilters";
import { Sort } from "../types/Sort";

const sorts = [
  { label: "Populaire", value: "POPULAR" },
  { label: "Date d'ajout (croissant)", value: "DATE_ADDED_ASC" },
  { label: "Date d'ajout (décroissant)", value: "DATE_ADDED_DESC" },
  { label: "Prix (croissant)", value: "PRICE_ASC" },
  { label: "Prix (décroissant)", value: "PRICE_DESC" },
  { label: "Nom (A-Z)", value: "NAME_ASC" },
  { label: "Nom (Z-A)", value: "NAME_DESC" },
];

const SortingSelect = () => {
  const [filters, setFilter] = useFilters();

  return (
    <select
      id="sorting"
      className="px-2 py-2 max-sm:flex-1 sm:py-4 sm:px-6 bg-transparent max-lg:flex-1"
      onChange={(e) => setFilter("sort", e.target.value as Sort)}
      value={filters.sort}
    >
      {sorts.map(({ label, value: sort }) => (
        <option key={sort} value={sort}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default SortingSelect;
