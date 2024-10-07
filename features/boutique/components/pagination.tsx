"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useCallback, useMemo } from "react";

type Props = {
  maxPages: number;
};

const Pagination = ({ maxPages }: Props) => {
  const params = useSearchParams();

  const page = useMemo(() => {
    const page = params.get("page");
    if (!page || Number.isNaN(Number(page))) return 0;

    return Number(page);
  }, [params]);
  const paramsString = useCallback(
    (page: number) => {
      const newParams = new URLSearchParams(params);
      newParams.set("page", page.toString());

      return newParams;
    },
    [params]
  );

  return (
    <div className="flex items-center -ml-3">
      {Array(maxPages)
        .fill("")
        .map((_, i) => (
          <Link
            key={i}
            // onClick={() => setPage(i)}
            href={`/boutique?${paramsString(i)}#content`}
            className={cn(
              "text-2xl px-3 py-2 font-light text-neutral-400 hover:text-neutral-700 transition-colors",
              i == page && "font-bold text-rose-400 hover:text-rose-600"
            )}
          >
            {i + 1}
          </Link>
        ))}
      {page != maxPages - 1 && (
        <Link
          className="flex px-3 self-stretch items-center disabled:opacity-50 transition-colors enabled:text-neutral-400 enabled:hover:text-neutral-700"
          href={`/boutique?${paramsString(page + 1)}#content`}
          // onClick={() => {
          //   return setPage(page + 1);
          // }}
          // disabled={page == maxPages - 1}
        >
          <span className="iconify teenyicons--arrow-right-outline size-5 " />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
