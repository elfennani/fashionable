import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useFilters = () => {
  const params = useSearchParams();

  const page = useMemo(() => {
    let page = Number(params.get("page"));
    if (Number.isNaN(page)) page = 0;

    return page;
  }, [params]);

  return useMemo(
    () => ({
      category: params.get("category"),
      color: params.get("color"),
      min: params.get("min"),
      max: params.get("max"),
      sorting: params.get("sort") ?? "popular",
      query: params.get("query"),
      page,
    }),
    [params, page]
  );
};

export default useFilters;
