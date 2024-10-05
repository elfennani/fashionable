import Banner from "@/components/banner";
import CategoryCard from "@/components/category-card";
import Container from "@/components/container";
import ProductCard from "@/components/product-card";
import SectionTitle from "@/components/section-title";

export default function Home() {
  return (
    <main>
      <Banner />
      <Container className="py-8 max-md:px-8 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nos Catégories</SectionTitle>
        <div className="flex gap-8 md:gap-16 md:items-center md:justify-center flex-col md:flex-row">
          <CategoryCard
            title="Casquette"
            image="https://plus.unsplash.com/premium_photo-1680859126205-1c593bb4f9e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            href="#"
          />
          <CategoryCard
            title="Bracelet"
            image="https://images.unsplash.com/photo-1689367436414-7acc3fdc3e2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            href="#"
          />
          <CategoryCard
            title="Chapeau"
            image="https://plus.unsplash.com/premium_photo-1693011410171-39d2fc309a6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            href="#"
          />
        </div>
      </Container>
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nos Produits Populaires</SectionTitle>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-8">
          <ProductCard
            title="Sac à Dos Urbain"
            image="https://plus.unsplash.com/premium_photo-1680373109883-47a3617e9acd?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            price={299}
            isNew
            isInWishlist={false}
          />
          <ProductCard
            title="Montre Classique en Cuir"
            image="https://images.unsplash.com/photo-1560079616-a788c0a654e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            price={299}
            undiscountedPrice={350}
            isNew
            isInWishlist={false}
          />
          <ProductCard
            title="Sac à Dos Urbain"
            image="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            price={299}
            isNew
            isInWishlist={false}
          />
        </div>
      </Container>
    </main>
  );
}
