"use client";
import React, { useState } from "react";
import FiltersModal from "./filters-modal";

const FiltersButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <FiltersModal open={open} onDismissRequest={() => setOpen(false)} />
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-3 p-2  lg:hidden"
      >
        Filters <span className="iconify teenyicons--filter-outline" />
      </button>
    </>
  );
};

export default FiltersButton;
