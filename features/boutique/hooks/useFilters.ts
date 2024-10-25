import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Filter from "../types/Filter";
import { sortSchema } from "../types/Sort";

const useFilters = () => {
  const params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const filter = useMemo((): Filter => {
    let filter = {};

    const set = (key: keyof Filter) => {
      if (params.has(key) && !isNaN(Number(params.get(key)))) {
        filter = { ...filter, [key]: Number(params.get(key)) };
      }
    };

    set("category");
    set("color");
    set("min");
    set("max");

    if (
      params.has("sort") &&
      sortSchema.safeParse(params.get("sort")).success
    ) {
      filter = { ...filter, sort: params.get("sort") };
    }

    if (params.has("search")) {
      filter = { ...filter, search: params.get("search") };
    }

    return filter;
  }, [params]);

  const onFilterChange = <K extends keyof Filter>(key: K, value: Filter[K]) => {
    const params = new URLSearchParams();

    Object.keys(filter).forEach((key) => {
      const value = filter[key as unknown as keyof Filter];
      if (!!value) {
        params.set(key, String(value));
      }
    });

    params.set(key, String(value));
    if (!value) {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return [filter, onFilterChange] as const;
};

export default useFilters;
