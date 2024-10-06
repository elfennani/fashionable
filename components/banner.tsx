"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = object;

const banners = [
  {
    title: "Découvrez Notre Nouvelle Collection Automne-Hiver 2024",
    subtitle: "Des vêtements et accessoires uniques pour un look tendance.",
    button_text: "Voir la Collection",
    image: `/banners/1.jpg`,
    alt_text:
      "Image de la nouvelle collection automne-hiver avec un mannequin en tenue de saison",
  },
  {
    title: "Accessoires Élégants et Indispensables",
    subtitle:
      "Ajoutez une touche d'élégance avec nos nouveaux sacs, lunettes et montres.",
    button_text: "Acheter les Accessoires",
    image: `/banners/2.jpg`,
    alt_text:
      "Image de divers accessoires tels que sacs, lunettes et montres sur une table en bois",
  },
  {
    title: "Jusqu'à 30% de Réduction sur les Produits Sélectionnés",
    subtitle:
      "Profitez de nos offres spéciales sur une sélection de vêtements et accessoires.",
    button_text: "Voir les Offres",
    image: `/banners/3.jpg`,
    alt_text: "Image d'offres promotionnelles avec des produits en réduction",
  },
];

const variants: Variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      zIndex: -19,
    };
  },
  center: {
    zIndex: -20,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: -19,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Banner({}: Props) {
  const [[page, direction], setIndex] = useState([0, 0]);
  const autoPagination = useRef<NodeJS.Timeout | null | false>(null);

  const increment = (shouldStop = true) => {
    if (shouldStop && autoPagination.current) {
      clearInterval(autoPagination.current);
      autoPagination.current = false;
    }

    setIndex((index) => {
      if (index[0] == banners.length - 1) {
        return [0, 1];
      }

      return [index[0] + 1, 1];
    });
  };

  const decrement = () => {
    if (autoPagination.current) {
      clearInterval(autoPagination.current!);
      autoPagination.current = false;
    }
    setIndex((index) => {
      if (index[0] == 0) {
        return [banners.length - 1, -1];
      }

      return [index[0] - 1, -1];
    });
  };

  useEffect(() => {
    if (autoPagination.current == false) return;
    autoPagination.current = setInterval(() => increment(false), 3000);
    return () => {
      if (autoPagination.current) {
        clearInterval(autoPagination.current!);
      }
    };
  }, []);

  return (
    <div className="w-screen max-h-[80svh] aspect-[9/16] xl:aspect-[21/9] relative overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          custom={direction}
          key={page}
          src={banners[page].image}
          width={1920}
          height={1280}
          className="size-full object-cover absolute -z-20"
          alt="banner"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
        />
      </AnimatePresence>
      <div className="bg-[radial-gradient(rgba(0,0,0,0),rgba(0,0,0,.3))] absolute -z-10 bg-opacity-20 top-0 left-0 right-0 bottom-0" />
      <div className="w-full h-full flex gap-8 flex-col justify-end lg:justify-between lg:items-center px-8 py-8 lg:px-32 lg:py-28">
        <div className="self-stretch flex gap-8 flex-col lg:flex-row justify-between items-start">
          <div className="grid grid-cols-1 grid-rows-1 items-end lg:items-start">
            <AnimatePresence initial={false}>
              <motion.h1
                key={page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-display col-start-1 row-start-1 text-balance font-black text-4xl sm:text-6xl max-w-[700px] text-white leading-tight"
              >
                {banners[page].title}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="flex gap-4 max-lg:self-end">
            <button
              onClick={decrement}
              className="bg-white bg-opacity-25 hover:bg-opacity-40 transition-colors p-3 sm:p-4 text-white  flex items-center justify-center rounded-full"
            >
              <span className="iconify teenyicons--left-outline size-6 sm:size-8 block" />
            </button>
            <button
              onClick={() => increment(true)}
              className="bg-white bg-opacity-25 hover:bg-opacity-40 transition-colors p-3 sm:p-4 text-white  flex items-center justify-center rounded-full"
            >
              <span className="iconify teenyicons--right-outline size-6 sm:size-8 block" />
            </button>
          </div>
        </div>

        <button className="bg-white relative after:block after:absolute after:bg-rose-100 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:w-full after:transition-transform after:top-0 after:left-0 after:bottom-0 px-6 md:px-16 py-6 text-rose-400 flex tracking-wider uppercase items-center justify-center gap-4 sm:gap-6 transition-colors">
          <AnimatePresence initial={false}>
            <motion.span
              key={page}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="z-20"
            >
              {banners[page].button_text}
            </motion.span>
          </AnimatePresence>
          <span className="iconify teenyicons--top-right-outline size-5 z-20" />
        </button>
      </div>
    </div>
  );
}
