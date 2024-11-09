/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import useFilters from "../hooks/useFilters";
import { useSearchParams } from "next/navigation";

type Props = object;

const SearchInput = ({}: Props) => {
  const params = useSearchParams();
  const [filters, setFilter] = useFilters();
  const [query, setQuery] = useState(filters.search ?? "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter("search", query.trim());
    }, 200);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="group flex items-center border relative border-neutral-200 flex-1 min-w-80">
      <span className="iconify teenyicons--search-outline absolute left-4" />
      <input
        type="text"
        placeholder="Recherche ici"
        className="text-base pl-12 pr-4 py-3 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoFocus={params.has("focus")}
      />
    </div>
  );
};

export default SearchInput;
