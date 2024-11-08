import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import WishlistProductList from "@/features/wishlist/components/wishlist-product-list";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Liste des souhaits",
};

const WishlistPage: NextPage<object> = ({}) => {
  return (
    <main>
      <PageHeader
        iconClassname="teenyicons--heart-circle-outline"
        title="Votre Liste de Souhaits"
        subtitle="Sauvegardez vos produits favoris pour un achat futur"
      />
      <Container id="content" className="py-4 md:py-8 lg:py-16">
        <WishlistProductList />
      </Container>
    </main>
  );
};

export default WishlistPage;
