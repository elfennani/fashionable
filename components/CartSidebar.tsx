import useSidebarClose from "@/hooks/useSidebarClose";
import { cn } from "@/utils/cn";
import React from "react";

type Props = {
  onClose: () => void;
};

export default function CartSidebar({ onClose }: Props) {
  const [closing, onExit] = useSidebarClose(() => onClose());

  return (
    <>
      <div
        onClick={() => onExit()}
        className={cn(
          "bg-black block lg:hidden bg-opacity-15 fixed z-10 left-0 top-0 right-0 bottom-0 animate-fade-in",
          closing && "animate-fade-out"
        )}
      />

      <div
        className={cn(
          "max-lg:animate-slide-in-right lg:shadow-lg lg:animate-fade-in max-lg:fixed lg:absolute max-lg:flex max-lg:flex-col z-20 max-lg:max-w-80 max-lg:w-[75vw] lg:w-[512px] bg-white lg:border lg:border-neutral-200 max-lg:top-0 right-0 bottom-0 lg:right-8 lg:bottom-0 lg:translate-y-full",
          closing && "max-lg:animate-slide-out-right lg:!animate-fade-out"
        )}
      >
        <header className="p-4 lg:p-6 flex items-center justify-between gap-4 border-b border-b-neutral-100">
          <h2 className="text-lg lg:text-2xl">Panier</h2>
          <button className="flex" onClick={onExit}>
            <span className="iconify teenyicons--x-outline size-4 lg:size-6" />
          </button>
        </header>

        <div className="h-52 max-lg:flex-1">
          <h1>Hello World</h1>
        </div>

        <div className="flex flex-col gap-5 p-4 lg:p-6 border-t border-t-neutral-100">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <h4 className="text-xs">SOUS-TOTAL</h4>
              <p className="font-bold">507.99 MAD</p>
            </div>
            <div className="flex justify-between items-center">
              <h4 className="text-xs">LIVRAISON</h4>
              <p className="font-bold">47 MAD</p>
            </div>
          </div>

          <hr className="border-neutral-100" />

          <div className="flex justify-between items-center">
            <h4 className="text-lg lg:text-2xl font-bold">TOTAL</h4>
            <p className="font-light text-2xl lg:text-4xl text-rose-400">
              554.99 MAD
            </p>
          </div>

          <button className="bg-rose-400 text-rose-50 uppercase flex px-8 py-4 lg:py-5 tracking-wide shadow-lg shadow-rose-100 font-semibold gap-6 items-center justify-center hover:bg-rose-500 transition-colors duration-200">
            procéder
            <span className="iconify teenyicons--arrow-right-solid size-6" />
          </button>
        </div>
      </div>
    </>
  );
}
