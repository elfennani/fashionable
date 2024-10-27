"use client";
import Logo from "@/assets/LOGO.svg";
import NavItem from "@/components/nav-item";
import Sidebar from "@/components/sidebar";
import { Route } from "@/types/Route";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartSidebar from "./cart-sidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import CartSidebarContent from "@/features/shopping-cart/components/cart-sidebar-content";
import { Separator } from "@/components/ui/separator";

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
          <Link href={"/boutique?focus"} className="max-md:hidden">
            <span className="iconify teenyicons--search-outline size-6"></span>
          </Link>
          <Link href="/wishlist" className="max-md:hidden">
            <span className="iconify teenyicons--heart-outline size-6 relative"></span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex">
                <span className="iconify teenyicons--bag-outline size-6"></span>
              </button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader className="py-4">
                <SheetTitle>Panier</SheetTitle>
              </SheetHeader>
              <Separator />
              <CartSidebarContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
