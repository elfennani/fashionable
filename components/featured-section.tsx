/* eslint-disable @next/next/no-img-element */
import React from "react";
import Container from "./container";
import Button from "./button";

const FeaturedSection = () => {
  return (
    <div className="bg-rose-50">
      <Container className="p-4 md:p-8 flex gap-8 md:gap-8 max-md:flex-col items-stretch">
        <div className="aspect-square overflow-hidden md:w-2/5">
          <img
            src="https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Featured"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-between md:items-start gap-8 md:py-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-balance leading-tight">
            Découvrez Nos Collections Exclusives
          </h1>
          <Button secondary className="bg-white" shadow>
            Voir la Collection
            <span className="iconify teenyicons--top-right-outline size-6" />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedSection;
