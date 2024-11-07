/* eslint-disable @next/next/no-img-element */
import LandingPageSectionType from "@/features/preferences/types/LandingPageSection";
import supabase from "@/utils/supabase";
import React from "react";
import Container from "./container";
import SectionTitle from "./section-title";
import AnimatedProductList from "./animated-product-list";
import { LinkButton } from "./button";

interface Props {
  section: LandingPageSectionType;
}

// DATE_ADDED_ASC
// DATE_ADDED_DESC
// PRICE_ASC
// PRICE_DESC
// NAME_ASC
// NAME_DESC
// POPULAR

const LandingPageSection = async ({ section }: Props) => {
  if (section.type === "product-listing-custom-search") {
    const { sort, limit, title, color, category, buttonIncluded } = section;
    let request = supabase
      .from("product")
      .select("*, images ( * ), category!inner(*), order_items(count)")
      .eq("archived", false)
      .limit(limit);

    if (category) {
      request = request.eq("category_id", category.id);
    }

    if (color) {
      request = request.eq("color_id", color.id);
    }

    switch (sort) {
      case "DATE_ADDED_ASC":
        request = request.order("created_at", { ascending: true });
        break;
      case "DATE_ADDED_DESC":
        request = request.order("created_at", { ascending: false });
        break;
      case "PRICE_ASC":
        request = request.order("price", { ascending: true });
        break;
      case "PRICE_DESC":
        request = request.order("price", { ascending: false });
        break;
      case "NAME_ASC":
        request = request.order("name", { ascending: true });
        break;
      case "NAME_DESC":
        request = request.order("name", { ascending: false });
        break;
      case "POPULAR":
        request = request.order("count", {
          ascending: false,
          referencedTable: "order_items",
        });
        break;
    }

    const { data, error } = await request;

    if (error) throw error;

    const params = new URLSearchParams();

    params.set("sort", sort);
    if (category) params.set("category", category.id.toString());
    if (color) params.set("color", color.id.toString());

    return (
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full capitalize">{title}</SectionTitle>
        <AnimatedProductList products={data} />
        {buttonIncluded && (
          <LinkButton
            to={`/boutique?${params.toString()}`}
            className="self-center"
            secondary
          >
            Voir plus
          </LinkButton>
        )}
      </Container>
    );
  }

  if (section.type === "product-listing-collection") {
    const {
      limit,
      title,
      collection: { id: collectionId },
      buttonIncluded,
    } = section;

    const { data: collection, error: collectionError } = await supabase
      .from("collections")
      .select("*")
      .eq("id", collectionId)
      .single();

    const { data, error } = await supabase
      .from("collection_items")
      .select("*, product!inner(*, images ( * ), category!inner(*))")
      .eq("collection_id", collectionId)
      .limit(limit);

    if (collectionError) throw collectionError;
    if (error) throw error;

    return (
      <Container className="py-8 max-md:px-4 md:py-12 flex flex-col gap-8 md:gap-16">
        <SectionTitle className="w-full capitalize">{title}</SectionTitle>
        <AnimatedProductList products={data.map((item) => item.product)} />
        {buttonIncluded && (
          <LinkButton
            to={`/collection/${collection.slug}`}
            className="self-center"
            secondary
          >
            Voir plus
          </LinkButton>
        )}
      </Container>
    );
  }

  if (section.type === "collection-thumbnail") {
    const {
      collection: { id: collectionId },
      thumbnail_url,
      description,
      title,
    } = section;

    const { data: collection, error } = await supabase
      .from("collections")
      .select()
      .eq("id", collectionId)
      .single();

    if (error) throw error;

    return (
      <div className="bg-rose-50">
        <Container className="p-4 md:p-8 flex gap-8 md:gap-8 max-md:flex-col items-stretch">
          <div className="aspect-square overflow-hidden md:w-2/5">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between md:items-start gap-8 md:py-8">
            <div className="space-y-2">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance leading-tight">
                {title}
              </h1>
              {!!description && <p>{description}</p>}
            </div>
            <LinkButton
              to={`/collection/${collection.slug}`}
              secondary
              className="bg-white"
              shadow
            >
              Voir la Collection
              <span className="iconify teenyicons--top-right-outline size-6" />
            </LinkButton>
          </div>
        </Container>
      </div>
    );
  }

  throw new Error("Invalid landing page section");
};

export default LandingPageSection;
