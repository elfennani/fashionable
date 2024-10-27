import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { Skeleton } from "@/components/ui/skeleton";
import BoutiqueContent from "@/features/boutique/components/boutique-content";
import { NextPage } from "next";
import { Suspense } from "react";

type Props = object;

const Boutique: NextPage<Props> = ({}) => {
  return (
    <main>
      <PageHeader
        iconClassname="teenyicons--shop-outline"
        title="Explorez Notre Boutique"
        subtitle="Découvrez Nos Collections Uniques et Tendance"
      />

      <Container
        className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] py-6 md:py-16 gap-6 md:gap-16"
        id="content"
      >
        <Suspense
          fallback={
            <>
              <Skeleton className="h-96" />
              <Skeleton className="h-96" />
            </>
          }
        >
          <BoutiqueContent />
        </Suspense>
      </Container>
    </main>
  );
};

export default Boutique;
