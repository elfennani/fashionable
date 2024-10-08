import React from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import BoutiqueFilters from "./boutique-filters";
import Button from "@/components/button";

type Props = {
  open: boolean;
  onDismissRequest: () => void;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const backdrop: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const FiltersModal = ({ open, onDismissRequest }: Props) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed top-0 lg:hidden left-0 right-0 bottom-0 bg-black bg-opacity-25 z-30 cursor-pointer"
          onClick={onDismissRequest}
        />
      )}
      {open && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed lg:hidden top-4 left-4 right-4 bottom-4 bg-white z-40 flex flex-col rounded-lg overflow-hidden"
          transition={{ delay: 0.1 }}
        >
          <header className="px-6 py-4 lg:p-6 flex items-center justify-between gap-4 border-b border-b-neutral-100">
            <h2 className="text-lg lg:text-2xl">Filters</h2>
            <button className="flex" onClick={onDismissRequest}>
              <span className="iconify teenyicons--x-outline size-4 lg:size-6" />
            </button>
          </header>
          <BoutiqueFilters className="p-6 overflow-y-auto flex-1" />
          <footer className="px-6 py-4 lg:p-6 flex items-center justify-end gap-4 border-t border-t-neutral-100">
            <Button className="py-3 px-4" onClick={onDismissRequest}>
              Confirmer
            </Button>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FiltersModal;
