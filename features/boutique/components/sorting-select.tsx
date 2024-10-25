"use client";

import useFilters from "../hooks/useFilters";
import { Sort } from "../types/Sort";

const sorts: Record<Sort, string> = {
  popular: "Populaire",
  increasing: "Croissant",
  decreasing: "Décroissant",
};

const SortingSelect = () => {
  const [, setFilter] = useFilters();

  return (
    <select
      id="sorting"
      className="px-2 py-2 max-sm:flex-1 sm:py-4 sm:px-6 bg-transparent max-lg:flex-1"
      onChange={(e) => setFilter("sort", e.target.value as Sort)}
    >
      {Object.keys(sorts).map((sort) => (
        <option key={sort} value={sort}>
          {sorts[sort as unknown as keyof typeof sorts]}
        </option>
      ))}
    </select>
  );
};

export default SortingSelect;
