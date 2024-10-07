import { NextPage } from "next";
import PageHeader from "@/components/page-header";
import Container from "@/components/container";
import BoutiqueFilters from "@/components/boutique-filters";
import { Suspense } from "react";

type Props = object;

const BoutiquePage: NextPage<Props> = ({}) => {
  return (
    <main>
      <PageHeader
        title="Explorez Notre Boutique"
        subtitle="Découvrez Nos Collections Uniques et Tendance"
      />

      <Suspense fallback={<div></div>}>
        <Container
          className="grid grid-cols-[16rem_1fr] py-16 gap-16"
          id="content"
        >
          <BoutiqueFilters />
          <div>world</div>
        </Container>
      </Suspense>
    </main>
  );
};

export default BoutiquePage;
