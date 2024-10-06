import Logo from "@/assets/LOGO.svg";
import Image from "next/image";
import { Route } from "@/types/Route";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  routes: Route[];
  visible: boolean;
  onClose?: () => void;
};

const container = {
  hidden: { opacity: 1 },
  visible: {
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const Sidebar = ({ routes, onClose, visible }: Props) => {
  return (
    <div className="lg:hidden">
      <AnimatePresence>
        {visible && (
          <motion.div
            onClick={() => onClose?.()}
            className={cn(
              "bg-black bg-opacity-15 fixed z-10 left-0 top-0 right-0 bottom-0 animate-fade-in"
              // closing && "animate-fade-out"
            )}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className={cn(
              "max-w-80 w-[75vw] z-50 h-dvh fixed bg-white top-0 left-0 flex flex-col gap-8 p-8",
              "after:block after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-white after:-translate-x-full"
              // closing && "animate-slide-out-left"
            )}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image src={Logo} alt="Fashionable" height={16} />
            </motion.div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="flex-1"
            >
              {routes.map((route) => (
                <motion.li variants={item} key={route.name}>
                  <Link
                    className="py-3 flex uppercase items-center justify-between font-bold"
                    href={route.path}
                  >
                    {route.name}
                    <span className="iconify teenyicons--arrow-right-solid size-6" />
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <Link href={"/recherche"} passHref>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="py-3 flex items-center gap-4 font-bold uppercase"
              >
                <span className="iconify teenyicons--search-outline size-6" />
                Recherche
              </motion.a>
            </Link>
            <Link href={"/wishlist"} passHref>
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="py-3 flex items-center gap-4 font-bold uppercase"
              >
                <span className="iconify teenyicons--heart-outline size-6" />
                Wishlist
              </motion.a>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
