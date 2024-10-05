/* eslint-disable @next/next/no-img-element */
import Container from "@/components/container";
import { NextPage } from "next";
import Link from "next/link";
import products from "@/assets/products.json";
import { ProductDetails } from "@/types/ProductDetails";
import TextPill from "@/components/text-pill";
import CounterInput from "@/components/counter-input";
import Button from "@/components/button";
import ProductInfo from "@/components/product-info";

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
        <Container className="py-4 md:py-6 flex gap-4 text-neutral-400">
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
      <div className="border-b border-b-neutral-200">
        <Container className="grid grid-cols-2 gap-8 py-16">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col gap-4">
              {product.images.map((image, i) => (
                <img
                  className="w-20 aspect-[4/5] object-cover bg-neutral-100"
                  src={image}
                  alt={`${product.title} ${i}`}
                  key={image}
                />
              ))}
            </div>
            <div className="aspect-[4/5] relative w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex flex-col justify-between">
                <div className="p-4 md:p-6 flex flex-col gap-1 md:gap-2 items-end">
                  {product.new && (
                    <TextPill className="bg-green-700">Nouveau</TextPill>
                  )}
                  {!!product.basePrice && (
                    <TextPill className="bg-rose-400">Promo</TextPill>
                  )}
                </div>
                <div className="flex gap-6 items-start p-8">
                  <button className="bg-white transition-colors p-3 text-neutral-700  flex items-center justify-center rounded-full">
                    <span className="iconify teenyicons--left-outline size-6 block" />
                  </button>
                  <button className="bg-white transition-colors p-3 text-neutral-700  flex items-center justify-center rounded-full">
                    <span className="iconify teenyicons--right-outline size-6 block" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-5xl text-balance">
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
            <div className="flex gap-10">
              <div className="self-end">
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
            <button className="flex items-center gap-4 uppercase hover:underline py-4 underline-offset-4">
              <span className="iconify teenyicons--heart-outline size-6" />
              Ajouter au wishlist
            </button>
            <div className="flex gap-10">
              <Link href="#" className="p-2 -m-2">
                <span className="iconify teenyicons--whatsapp-outline size-6" />
              </Link>
              <Link href="#" className="p-2 -m-2">
                <span className="iconify teenyicons--instagram-outline size-6" />
              </Link>
              <Link href="#" className="p-2 -m-2">
                <span className="iconify teenyicons--facebook-outline size-6" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <ProductInfo product={product} />
    </div>
  );
};

export default Page;