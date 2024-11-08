import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import ProductList from "@/components/product-list";
import supabase from "@/utils/supabase";
import { error } from "console";
import { Metadata, NextPage } from "next";

export async function generateStaticParams() {
  const { data: collections, error } = await supabase
    .from("collections")
    .select("slug")
    .throwOnError();

  if (error) throw error;

  return collections;
}

interface Props {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params;
  const { data: collection, error } = await supabase
    .from("collections")
    .select()
    .eq("slug", slug)
    .single();

  if (error) throw error;

  const { title, description, keywords } = collection;

  return {
    title,
    description,
    keywords,
  };
};

const CollectionPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const collection = await supabase
    .from("collections")
    .select()
    .eq("slug", slug)
    .single();

  if (collection.error) throw error;
  const items = await supabase
    .from("collection_items")
    .select("*, product!inner(*, images ( * ), category!inner(*))")
    .eq("product.archived", false)
    .eq("collection_id", collection.data.id);

  if (items.error) throw items.error;

  return (
    <main>
      <PageHeader
        title={`Collection: ${collection.data.title}`}
        subtitle={collection.data.description ?? ""}
      />
      <Container id="content" className="py-4 md:py-8 lg:py-16">
        <ProductList products={items.data.map((item) => item.product)} />
      </Container>
    </main>
  );
};

export default CollectionPage;
