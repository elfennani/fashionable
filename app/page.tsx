import Banner from "@/components/banner";
import CategoryCard from "@/components/category-card";
import Container from "@/components/container";
import LandingPageSection from "@/components/landing-page-sections";
import SectionTitle from "@/components/section-title";
import Testimonial from "@/components/testimonial";
import getPrefs from "@/features/preferences/functions/get-prefs";
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
  const testimonials = await supabase.from("testimonials").select();
  const prefs = await getPrefs();

  if (categories.error) throw categories.error;
  if (popularProducts.error) throw popularProducts.error;
  if (newProducts.error) throw newProducts.error;
  if (collections.error) throw collections.error;
  if (slideshows.error) throw slideshows.error;
  if (testimonials.error) throw testimonials.error;

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
      {prefs["landing-page-sections"].map((section) => (
        <LandingPageSection key={section.id} section={section} />
      ))}
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full">
          Ce Que Nos Clients Disent
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {testimonials.data.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              city={testimonial.city ?? ""}
              fullname={testimonial.full_name}
              rating={testimonial.rating}
              profileImage={testimonial.image_url}
            >
              {testimonial.message}
            </Testimonial>
          ))}
        </div>
      </Container>
    </main>
  );
}
