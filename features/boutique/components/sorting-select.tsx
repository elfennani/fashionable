"use client";
import React from "react";
import useSearchParams from "../hooks/useSearchParams";

const sorts = {
  popular: "Populaire",
  increasing: "Croissant",
  decreasing: "Decroissant",
};

const SortingSelect = () => {
  const [, setParams] = useSearchParams();

  return (
    <select
      id="sorting"
      className="py-4 px-6 bg-transparent"
      onChange={(e) => setParams("sort", e.target.value)}
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
