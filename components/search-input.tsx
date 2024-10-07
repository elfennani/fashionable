/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useSearchParams from "@/hooks/useSearchParams";
import React, { useEffect, useState } from "react";

type Props = object;

const SearchInput = ({}: Props) => {
  const [query, setQuery] = useState("");
  const [, setParam] = useSearchParams();

  useEffect(() => {
    const timeout = setTimeout(() => setParam("query", query), 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="group flex items-center border relative border-neutral-200 flex-1 min-w-80">
      <span className="iconify teenyicons--search-outline absolute left-4" />
      <input
        type="text"
        placeholder="RECHERCHE ICI"
        className="text-base pl-12 pr-4 py-3 w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
