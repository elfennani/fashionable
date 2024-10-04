import Banner from "@/components/Banner";
import CategoryCard from "@/components/CategoryCard";
import Container from "@/components/Container";
import NavHeader from "@/components/NavHeader";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";

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
    </main>
  );
}
