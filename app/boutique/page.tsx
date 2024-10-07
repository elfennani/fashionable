"use client";
import { NextPage } from "next";
import PageHeader from "@/components/page-header";
import Container from "@/components/container";
import BoutiqueFilters from "@/features/boutique/components/boutique-filters";
import SearchInput from "@/features/boutique/components/search-input";
import { Suspense } from "react";
import SortingSelect from "@/features/boutique/components/sorting-select";
import FilteredProductsList from "@/features/boutique/components/filtered-products-list";

type Props = object;

const Boutique: NextPage<Props> = ({}) => {
  return (
    <main>
      <PageHeader
        title="Explorez Notre Boutique"
        subtitle="Découvrez Nos Collections Uniques et Tendance"
      />

      <Container
        className="grid grid-cols-[16rem_1fr] py-16 gap-16"
        id="content"
      >
        <Suspense fallback={<div />}>
          <BoutiqueFilters />
        </Suspense>
        <div className="flex flex-col gap-12">
          <div className="flex gap-6 items-center">
            <div className="flex flex-1 items-center gap-6">
              <Suspense fallback={<div />}>
                <SearchInput />
              </Suspense>
              <div className="flex-1 font-semibold capitalize">
                <span className="text-rose-400">172</span> produits trouvés
              </div>
            </div>
            <div className="flex items-center">
              <label htmlFor="sorting" className="font-light">
                Trier par:
              </label>
              <Suspense fallback={<div />}>
                <SortingSelect />
              </Suspense>
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
