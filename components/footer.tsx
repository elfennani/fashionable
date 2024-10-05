"use client";

import Logo from "@/assets/LOGO.svg";
import React, { useState } from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";

function Footer() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <footer>
      <div className="bg-rose-50">
        <Container className="py-16 px-8 flex flex-col gap-8 md:flex-row items-start justify-between">
          <div className="md:max-w-96">
            <Link href="/">
              <Image
                src={Logo}
                alt="Fashionable"
                className="h-6 w-full max-md:h-4 object-contain object-left -translate-x-0.5"
              />
            </Link>
            <p
              className={cn(
                "line-clamp-3 font-light leading-loose mt-6 mb-2",
                !collapsed && "line-clamp-none"
              )}
            >
              FASHIONABLE est votre destination en ligne pour des vêtements et
              accessoires tendance, alliant style et confort. Nous nous
              engageons à offrir des produits de haute qualité, éthiques et
              durables, pour vous aider à exprimer votre personnalité. Découvrez
              nos collections et faites de chaque jour une occasion de briller!
            </p>
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="font-semibold text-rose-400 leading-loose underline underline-offset-4"
            >
              {collapsed ? "Lire Plus" : "Lire Moin"}
            </button>
          </div>
          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div>
              <h3 className="mb-4 uppercase font-bold text-lg">Achats</h3>
              <ul className="flex flex-col text-neutral-600 gap-2">
                <li>
                  <Link href="#">Panier</Link>
                </li>
                <li>
                  <Link href="#">Wishlist</Link>
                </li>
                <li>
                  <Link href="#">Livraison et Paiement</Link>
                </li>
                <li>
                  <Link href="#">Boutique</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 uppercase font-bold text-lg">
                Contactez-nous
              </h3>
              <ul className="flex flex-col text-neutral-600 gap-2">
                <li>
                  <Link href="#">
                    Téléphone:{" "}
                    <span className="text-rose-400 font-semibold">
                      +212 6 12 34 56 78
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    Email:{" "}
                    <span className="text-rose-400 font-semibold">
                      contact@example.ma
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-rose-400 text-rose-50">
        <Container className="py-6 sm:py-8 px-8 flex gap-4 max-sm:flex-col items-center sm:justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="#">
                <span className="iconify teenyicons--instagram-solid size-6" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="iconify teenyicons--whatsapp-solid size-6" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <span className="iconify teenyicons--facebook-solid size-6" />
              </Link>
            </li>
          </ul>
          <p className="font-medium text-rose-100">
            2024 Fashionable - All Rights Reserved
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
