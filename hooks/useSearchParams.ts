import {
  usePathname,
  useSearchParams as useReadOnlySearchParams,
  useRouter,
} from "next/navigation";

const useSearchParams = () => {
  const searchParams = useReadOnlySearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const set = (key: string, value: string) => {
    params.set("page", "0");
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return [searchParams, set] as const;
};

export default useSearchParams;
