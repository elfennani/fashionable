import Image from "next/image";
import React from "react";

type Props = object;

export default function Banner({}: Props) {
  return (
    <div className="w-screen max-h-[80svh] aspect-[9/16] xl:aspect-[21/9] relative overflow-hidden">
      <Image
        src={`/banners/1.jpg`}
        width={1920}
        height={1280}
        className="size-full object-cover absolute -z-20"
        alt="banner"
      />
      <div className="bg-[radial-gradient(rgba(0,0,0,0),rgba(0,0,0,.3))] absolute -z-10 bg-opacity-20 top-0 left-0 right-0 bottom-0" />
      <div className="w-full h-full flex gap-8 flex-col justify-end lg:justify-between lg:items-center px-8 py-8 lg:px-32 lg:py-28">
        <div className="self-stretch flex gap-8 flex-col lg:flex-row justify-between items-start">
          <h1 className="font-display text-balance font-black text-4xl sm:text-6xl max-w-[700px] text-white leading-tight">
            Affirmez Votre Style Avec Élégance
          </h1>
          <div className="flex gap-4 max-lg:self-end">
            <button className="bg-white bg-opacity-25 hover:bg-opacity-40 transition-colors p-3 sm:p-4 text-white  flex items-center justify-center rounded-full">
              <span className="iconify teenyicons--left-outline size-6 sm:size-8 block" />
            </button>
            <button className="bg-white bg-opacity-25 hover:bg-opacity-40 transition-colors p-3 sm:p-4 text-white  flex items-center justify-center rounded-full">
              <span className="iconify teenyicons--right-outline size-6 sm:size-8 block" />
            </button>
          </div>
        </div>

        <button className="bg-white px-6 md:px-16 py-6 text-rose-400 flex tracking-wider uppercase items-center justify-center gap-4 sm:gap-6 transition-colors hover:bg-rose-50">
          Shoppez Maintenant
          <span className="iconify teenyicons--top-right-outline size-5" />
        </button>
      </div>
    </div>
  );
}
