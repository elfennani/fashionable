/* eslint-disable @next/next/no-img-element */
import AnimatedProductList from "@/components/animated-product-list";
import Container from "@/components/container";
import ProductImageSlideshow from "@/components/product-image-slideshow";
import ProductInfo from "@/components/product-info";
import SectionTitle from "@/components/section-title";
import ProductInfoFooter from "@/features/shopping-cart/components/product-info-footer";
import WishlistButton from "@/features/wishlist/components/wishlist-button";
import supabase from "@/utils/supabase";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const { data: products, error } = await supabase
    .from("product")
    .select("id")
    .eq("archived", false)
    .throwOnError();

  if (!products) throw error;

  return products.map((post) => ({
    slug: post.id.toString(),
  }));
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const { data, error } = await supabase
    .from("product")
    .select("*, images ( * ), category!inner(*)")
    .eq("id", Number(slug))
    .eq("archived", false)
    .single();

  if (error) return <div>{error.message}</div>;

  const similarProducts = await supabase
    .from("product")
    .select("*, images ( * ), category!inner(*)")
    .eq("category_id", data.category_id)
    .eq("archived", false)
    .neq("id", data.id)
    .limit(3);

  if (similarProducts.error) return <div>{similarProducts.error.message}</div>;

  const product = data;
  const similarProductsData = similarProducts.data;

  return (
    <div>
      <div className="md:bg-neutral-100">
        <Container className="!px-8 py-2 md:py-6 flex flex-wrap gap-2 md:gap-4 text-neutral-400 text-sm md:text-base">
          <Link
            href="/boutique"
            className="hover:text-neutral-700 transition-colors"
          >
            Boutique
          </Link>
          <span>/</span>
          <Link
            href={`/boutique?category=${product.category_id}`}
            className="hover:text-neutral-700 transition-colors"
          >
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="text-neutral-700">{product.name}</span>
        </Container>
      </div>
      <div className="md:border-b md:border-b-neutral-200">
        <Container className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 py-4 md:py-16">
          <ProductImageSlideshow product={product} />
          <div className="md:py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-4xl md:text-5xl text-balance">
                {product.name}
              </h1>
              <p className="text-neutral-400">
                {product.status == "disponible" ? (
                  <span className="font-semibold uppercase text-green-700">
                    disponible
                  </span>
                ) : (
                  <span className="font-semibold uppercase text-red-700">
                    indisponible
                  </span>
                )}{" "}
                • UGS {product.ugs}
              </p>
            </div>
            <hr className="border-neutral-200" />
            <p className="font-light leading-loose tracking-wide min-h-16">
              {product.description_short}
            </p>
            <ProductInfoFooter product={product} />
            <WishlistButton productId={product.id} />
            <div className="flex gap-10 max-md:pb-4 max-md:justify-center">
              <Link href="#" className="p-2 -m-2 group">
                <span className="iconify teenyicons--whatsapp-outline group-hover:teenyicons--whatsapp-solid size-6" />
              </Link>
              <Link href="#" className="p-2 -m-2 group">
                <span className="iconify teenyicons--instagram-outline group-hover:teenyicons--instagram-solid size-6" />
              </Link>
              <Link href="#" className="p-2 -m-2 group">
                <span className="iconify teenyicons--facebook-outline group-hover:teenyicons--facebook-solid size-6" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <ProductInfo product={product} />

      <Container className="py-8 md:py-16 flex flex-col gap-8 md:gap-16">
        <SectionTitle>Produits similaires</SectionTitle>
        <AnimatedProductList products={similarProductsData} />
      </Container>
    </div>
  );
};

export default Page;
