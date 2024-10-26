import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import { NextPage } from "next";
// import { productsMapped } from "../page";

const WishlistPage: NextPage<object> = ({}) => {
  return (
    <main>
      <PageHeader
        title="Votre Liste de Souhaits"
        subtitle="Sauvegardez vos produits favoris pour un achat futur"
      />
      <Container id="content" className="py-4 md:py-8 lg:py-16">
        {/* TODO: */}
        {/* <AnimatedProductList
          products={productsMapped
            .slice(0, 5)
            .map((p) => ({ ...p, wishlisted: true }))}
        /> */}
      </Container>
    </main>
  );
};

export default WishlistPage;
