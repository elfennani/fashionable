"use client";
import React from "react";
import useFilters from "../hooks/useFilters";

type Props = {
  maxPages: number;
};

const LoadMore = ({ maxPages }: Props) => {
  const [filter, setFilter] = useFilters();
  const page = filter.page ?? 1;

  if (page >= maxPages) return null;

  return (
    <div className="flex justify-center mt-8">
      <button
        className="px-8 py-3 bg-amber-500 text-primary-foreground hover:opacity-90 transition-opacity rounded-full text-sm font-medium"
        onClick={() => setFilter("page", page + 1)}
      >
        Charger plus
      </button>
    </div>
  );
};

export default LoadMore;
