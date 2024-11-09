import { parseAsInteger, parseAsString, useQueryState } from "nuqs";
import { useMemo } from "react";
import Filter from "../types/Filter";
import { sortSchema } from "../types/Sort";

const useFilters = () => {
  const [category, setCategory] = useQueryState("category", {
    ...parseAsInteger,
    clearOnDefault: true,
    defaultValue: -1,
  });
  const [color, setColor] = useQueryState("color", parseAsInteger);
  const [min, setMin] = useQueryState("min", parseAsInteger);
  const [max, setMax] = useQueryState("max", parseAsInteger);
  const [page, setPage] = useQueryState("page", parseAsInteger);
  const [search, setSearch] = useQueryState("search", parseAsString);
  const [sort, setSort] = useQueryState("sort", parseAsString);

  const filter = useMemo((): Filter => {
    return {
      category: category ?? undefined,
      color: color ?? undefined,
      max: max ?? undefined,
      min: min ?? undefined,
      page: page ?? undefined,
      search: search ?? undefined,
      sort: sortSchema.safeParse(sort).data ?? undefined,
    };
  }, [category, color, min, max, page, search, sort]);

  const onFilterChange = <K extends keyof Filter>(key: K, value: Filter[K]) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updater: Record<keyof Filter, (value: any) => void> = {
      category: setCategory,
      color: setColor,
      max: setMax,
      min: setMin,
      page: setPage,
      search: setSearch,
      sort: setSort,
    };

    updater[key](value);
  };

  return [filter, onFilterChange] as const;
};

export default useFilters;
