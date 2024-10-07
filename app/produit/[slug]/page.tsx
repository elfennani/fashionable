/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import { NextPage } from "next";
import Link from "next/link";
import products from "@/assets/products.json";
import { ProductDetails } from "@/types/ProductDetails";
import CounterInput from "@/components/counter-input";
import Button from "@/components/button";
import ProductInfo from "@/components/product-info";
import SectionTitle from "@/components/section-title";
import { productsMapped } from "@/app/page";
import ProductImageSlideshow from "@/components/product-image-slideshow";
import AnimatedProductList from "@/components/animated-product-list";

interface Props {
  params: { slug: string };
}

const Page: NextPage<Props> = ({ params: { slug } }) => {
  const productRaw = products.find((product) => product.id === Number(slug))!;
  const product: ProductDetails = {
    id: productRaw?.id,
    available: productRaw.available,
    category: productRaw.category,
    delivery: productRaw.delivery,
    description: productRaw.description,
    image: productRaw.image,
    images: productRaw.images,
    inCart: false,
    longDescription: productRaw.longDescription,
    new: productRaw.is_new,
    price: productRaw.price,
    basePrice: productRaw.undiscounted_price,
    size: productRaw.size,
    specifications: productRaw.specifications,
    title: productRaw.name,
    ugs: productRaw.ugs,
    wishlisted: false,
    similar: products
      .filter((p) => productRaw.similar.includes(p.id))
      .map((product) => ({
        id: product.id,
        image: product.image,
        new: product.is_new,
        price: product.price,
        basePrice: product.undiscounted_price,
        title: product.name,
        wishlisted: false,
      })),
  };

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
            href="/boutique"
            className="hover:text-neutral-700 transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-neutral-700">{product.title}</span>
        </Container>
      </div>
      <div className="md:border-b md:border-b-neutral-200">
        <Container className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 py-4 md:py-16">
          <ProductImageSlideshow product={product} />
          <div className="md:py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-4xl md:text-5xl text-balance">
                {product.title}
              </h1>
              <p className="text-neutral-400">
                {product.available ? (
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
            <p className="font-light leading-loose tracking-wide min-h-32">
              {product.description}
            </p>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <p className="font-semibold tracking-tight uppercase">Taille</p>
                <p className="px-6 py-4 border border-neutral-200">
                  {product.size}
                </p>
              </div>
              <CounterInput max={5} />
            </div>
            <div className="flex max-lg:flex-col gap-6 lg:gap-10">
              <div className="lg:self-end">
                {product.basePrice && (
                  <p className="font-black text-neutral-300 line-through">
                    {product.basePrice} MAD
                  </p>
                )}
                <p className="text-4xl font-light text-rose-400 tracking-tighter">
                  {product.price} MAD
                </p>
              </div>
              <Button className="flex-1 !px-6">
                <span className="iconify teenyicons--bag-plus-outline size-6" />
                Ajouter au panier
              </Button>
            </div>
            <button className="flex items-center max-md:self-center gap-4 uppercase hover:underline py-4 underline-offset-4">
              <span className="iconify teenyicons--heart-outline size-6" />
              Ajouter au wishlist
            </button>
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
        <AnimatedProductList products={productsMapped.slice(0, 3)} />
      </Container>
    </div>
  );
};

export default Page;
