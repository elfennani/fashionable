"use client";
import Logo from "@/assets/LOGO.svg";
import React, { useState } from "react";
import Image from "next/image";
import NavItem from "@/components/nav-item";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
import { Route } from "@/types/Route";
import CartSidebar from "./cart-sidebar";

const routes: Route[] = [
  { name: "Accueil", path: "/" },
  { name: "Boutique", path: "/boutique" },
  { name: "Contact", path: "/contact" },
];

export default function NavHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header className="w-full transition-colors group-has-[.blend]/body:bg-zinc-100">
      <div className="flex relative max-w-[1264px] mx-auto px-8 items-center py-6 md:py-10">
        {cartOpen && <CartSidebar onClose={() => setCartOpen(false)} />}
        <nav className="md:flex-1">
          <button
            className="lg:hidden flex items-center justify-center p-4 -m-4"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="iconify heroicons-outline--menu-alt-4 size-6" />
          </button>
          <Sidebar
            routes={routes}
            visible={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <ul className="flex gap-8 max-lg:hidden">
            {routes.map((route) => (
              <li key={route.name}>
                <NavItem
                  key={route.name}
                  href={route.path}
                  label={route.name}
                />
              </li>
            ))}
          </ul>
        </nav>
        <Link href="/" className="flex-1">
          <Image
            src={Logo}
            alt="Fashionable"
            className="h-6 w-full max-md:h-4"
          />
        </Link>
        <div className="md:flex-1 flex gap-8 justify-end">
          <span className="iconify teenyicons--search-outline size-6 max-md:hidden"></span>
          <Link href="/wishlist">
            <span className="iconify teenyicons--heart-outline size-6 relative max-md:hidden"></span>
          </Link>
          <button className="flex" onClick={() => setCartOpen(true)}>
            <span className="iconify teenyicons--bag-outline size-6"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
