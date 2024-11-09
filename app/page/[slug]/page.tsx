import Container from "@/components/container";
import PageHeader from "@/components/page-header";
import supabase from "@/utils/supabase";
import { Metadata, NextPage } from "next";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data: pages, error } = await supabase
    .from("pages")
    .select("slug")
    .throwOnError();

  if (error) throw error;

  return pages.map((page) => {
    return { slug: page.slug };
  });
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { data: page, error } = await supabase
    .from("pages")
    .select()
    .eq("slug", slug)
    .single();

  if (error) throw error;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
  };
}

const CustomPage: NextPage<Props> = async ({ params }) => {
  const { slug } = await params;
  const { data: page, error } = await supabase
    .from("pages")
    .select()
    .eq("slug", slug)
    .single();

  if (error) throw error;
  const { content, description, title } = page;

  return (
    <main>
      <PageHeader title={title} subtitle={description ?? ""} />
      <Container id="content" className="py-4 md:py-8 lg:py-16">
        <div
          className="prose w-full prose-headings:m-0 max-w-none prose-p:m-0 prose-ul:m-0 prose-ol:m-0 prose-li:m-0 prose-hr:m-0"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </Container>
    </main>
  );
};

export default CustomPage;
