import Banner from "@/components/banner";
import Button from "@/components/button";
import CategoryCard from "@/components/category-card";
import Container from "@/components/container";
import FeaturedSection from "@/components/featured-section";
import ProductList from "@/components/product-list";
import SectionTitle from "@/components/section-title";
import Testimonial from "@/components/testimonial";

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
        <ProductList />
        <Button className="self-center" secondary>
          Voir plus
        </Button>
      </Container>
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nouveautés</SectionTitle>
        <ProductList />
        <Button className="self-center" secondary>
          Voir plus
        </Button>
      </Container>
      <FeaturedSection />
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">
          Ce Que Nos Clients Disent
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Testimonial
            city="Marrakesh"
            fullname="Sarah M."
            rating={4.9}
            profileImage="/people/1.jpg"
          >
            La qualité des produits de FASHIONABLE est incroyable ! J&apos;ai
            acheté un chapeau qui s&apos;adapte parfaitement à mon style. Je
            suis ravie !
          </Testimonial>
          <Testimonial
            city="Tanger"
            fullname="Lucas D."
            rating={5.0}
            profileImage="/people/2.jpg"
          >
            FASHIONABLE est devenu mon site de prédilection pour les accessoires
            ! J&apos;ai acheté un bracelet et une montre, et j&apos;adore la
            façon dont ils complètent mes tenues. La livraison était rapide, et
            le service client a été très réactif à mes questions. Je reviendrai
            certainement pour plus d&apos;achats.
          </Testimonial>
        </div>
      </Container>
    </main>
  );
}
