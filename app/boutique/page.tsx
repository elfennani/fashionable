import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import BoutiqueContent from "@/features/boutique/components/boutique-content";
import { BoutiqueSettingsProvider } from "@/features/boutique/contexts/boutique-settings-context";
import { ProductListProvider } from "@/features/boutique/contexts/product-list-context";
import supabase from "@/utils/supabase";
import { Metadata, NextPage } from "next";

type Props = object;

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Explorez notre boutique en ligne et découvrez nos collections uniques et tendance. Parcourez une variété de catégories et trouvez des articles de mode qui vous correspondent. Profitez de nos nouveautés et des produits les plus populaires !",
  keywords:
    "boutique, mode, collections, shop, tendance, nouveautés, catégories, accessoires, vêtements",
};

const Boutique: NextPage<Props> = async ({}) => {
  const { data: categories } = await supabase
    .rpc("get_categories_unarchived")
    .throwOnError();
  const { data: colors } = await supabase.rpc("get_colors").throwOnError();
  const { data: cheapestProduct } = await supabase
    .from("product")
    .select()
    .eq("archived", false)
    .order("price", { ascending: true })
    .limit(1)
    .single()
    .throwOnError();
  const { data: mostExpensiveProduct } = await supabase
    .from("product")
    .select()
    .eq("archived", false)
    .order("price", { ascending: false })
    .limit(1)
    .single()
    .throwOnError();
  const { count } = await supabase
    .from("product")
    .select("*", { count: "estimated", head: true })
    .throwOnError();

  const { data: products, error: productsError } = await supabase
    .from("product")
    .select("*, images ( * ), category!inner(*), popularity:order_items(count)")
    .eq("archived", false);

  if (
    !categories ||
    !colors ||
    !cheapestProduct ||
    !mostExpensiveProduct ||
    productsError ||
    count == null
  )
    throw new Error("Failed to load required info");

  const settings = {
    categories,
    colors,
    totalProductsCount: count,
    priceRange: {
      min: cheapestProduct.price,
      max: mostExpensiveProduct.price,
    },
  };

  return (
    <BoutiqueSettingsProvider settings={settings}>
      <ProductListProvider
        products={products.map((p) => ({
          ...p,
          popularity: p.popularity[0].count,
        }))}
      >
        <main>
          <PageHeader
            iconClassname="teenyicons--shop-outline"
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
      </ProductListProvider>
    </BoutiqueSettingsProvider>
  );
};

export default Boutique;
