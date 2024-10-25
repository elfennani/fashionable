import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import BoutiqueContent from "@/features/boutique/components/boutique-content";
import { NextPage } from "next";

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
        <BoutiqueContent />
      </Container>
    </main>
  );
};

export default Boutique;
