import AnimatedProductList from "@/components/animated-product-list";
import Banner from "@/components/banner";
import Button from "@/components/button";
import CategoryCard from "@/components/category-card";
import Container from "@/components/container";
import FeaturedSection from "@/components/featured-section";
import SectionTitle from "@/components/section-title";
import Testimonial from "@/components/testimonial";
import BannerType from "@/types/Banner";
import supabase from "@/utils/supabase";

export default async function Home() {
  const categories = await supabase
    .from("category")
    .select("*")
    .order("name")
    .throwOnError();
  const popularProducts = await supabase
    .from("product")
    .select("*, images ( * ), category!inner(*)")
    .eq("archived", false)
    .order("orders", { ascending: false })
    .limit(3)
    .throwOnError();

  const newProducts = await supabase
    .from("product")
    .select("*, images ( * ), category!inner(*)")
    .eq("archived", false)
    .order("created_at", { ascending: false })
    .limit(3)
    .throwOnError();

  const collections = await supabase.from("collections").select();
  const slideshows = await supabase.from("slideshow").select();

  if (categories.error) throw categories.error;
  if (popularProducts.error) throw popularProducts.error;
  if (newProducts.error) throw newProducts.error;
  if (collections.error) throw collections.error;
  if (slideshows.error) throw slideshows.error;

  return (
    <main>
      <Banner
        banners={slideshows.data as BannerType[]}
        collections={collections.data}
      />
      <Container className="py-8 max-md:px-8 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nos Catégories</SectionTitle>
        <div className="flex flex-wrap gap-8 md:gap-16 md:items-center md:justify-center flex-col md:flex-row">
          {categories.data.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              image={category.image}
              href={`/boutique?category=${category.id}`}
            />
          ))}
        </div>
      </Container>
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nos Produits Populaires</SectionTitle>
        <AnimatedProductList products={popularProducts.data} />
        <Button className="self-center" secondary>
          Voir plus
        </Button>
      </Container>
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">Nouveautés</SectionTitle>
        <AnimatedProductList products={newProducts.data} />
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
