"use client";
import { NextPage } from "next";
import PageHeader from "@/components/page-header";
import Container from "@/components/container";
import BoutiqueFilters from "@/features/boutique/components/boutique-filters";
import SearchInput from "@/features/boutique/components/search-input";
import { Suspense } from "react";
import SortingSelect from "@/features/boutique/components/sorting-select";
import FilteredProductsList from "@/features/boutique/components/filtered-products-list";
import FiltersButton from "@/features/boutique/components/filters-button";

type Props = object;

const Boutique: NextPage<Props> = ({}) => {
  return (
    <main>
      <PageHeader
        title="Explorez Notre Boutique"
        subtitle="Découvrez Nos Collections Uniques et Tendance"
      />

      <Container
        className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] py-6 md:py-16 gap-6 md:gap-16"
        id="content"
      >
        <Suspense fallback={<div />}>
          <div className="max-lg:hidden">
            <BoutiqueFilters />
          </div>
        </Suspense>
        <div className="flex flex-col gap-6 lg:gap-12">
          <div className="flex max-lg:flex-col-reverse gap-4 lg:gap-6 lg:items-center">
            <div className="flex flex-1 xl:items-center gap-2 xl:gap-6 flex-col xl:flex-row">
              <Suspense fallback={<div />}>
                <SearchInput />
              </Suspense>
              <div className="flex-1 font-semibold capitalize">
                <span className="text-rose-400">172</span> produits trouvés
              </div>
            </div>
            <div className="flex flex-wrap max-lg:flex-1 gap-2 sm:gap-6 lg:gap-0 items-center">
              <label htmlFor="sorting" className="font-light">
                Trier par:
              </label>
              <Suspense fallback={<div />}>
                <SortingSelect />
              </Suspense>
              <div className="h-4/5 w-px bg-neutral-200" />
              <FiltersButton />
            </div>
          </div>
          <Suspense fallback={<div />}>
            <FilteredProductsList />
          </Suspense>
        </div>
      </Container>
    </main>
  );
};

export default Boutique;
