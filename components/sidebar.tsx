import Logo from "@/assets/LOGO.svg";
import Image from "next/image";
import { Route } from "@/types/Route";
import Link from "next/link";
import { cn } from "@/utils/cn";
import useSidebarClose from "@/hooks/useSidebarClose";

type Props = {
  routes: Route[];
  onClose?: () => void;
};

const Sidebar = ({ routes, onClose }: Props) => {
  const [closing, onExit] = useSidebarClose(() => onClose?.());

  return (
    <div className="lg:hidden">
      <div
        onClick={() => onExit()}
        className={cn(
          "bg-black bg-opacity-15 fixed z-10 left-0 top-0 right-0 bottom-0 animate-fade-in",
          closing && "animate-fade-out"
        )}
      />

      <div
        className={cn(
          "max-w-80 w-[75vw] animate-slide-in-left z-20 h-dvh fixed bg-white top-0 left-0 flex flex-col gap-8 p-8",
          closing && "animate-slide-out-left"
        )}
      >
        <Image src={Logo} alt="Fashionable" height={16} />
        <ul className="flex-1">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                className="py-3 flex uppercase items-center justify-between font-bold"
                href={route.path}
              >
                {route.name}
                <span className="iconify teenyicons--arrow-right-solid size-6" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          className="py-3 flex items-center gap-4 font-bold uppercase"
          href={"/recherche"}
        >
          <span className="iconify teenyicons--search-outline size-6" />
          Recherche
        </Link>
        <Link
          className="py-3 flex items-center gap-4 font-bold uppercase"
          href={"/wishlist"}
        >
          <span className="iconify teenyicons--heart-outline size-6" />
          Wishlist
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
