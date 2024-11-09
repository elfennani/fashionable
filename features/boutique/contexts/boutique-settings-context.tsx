"use client";
import { Database } from "@/types/database.types";
import { createContext, ReactNode, useContext } from "react";

interface BoutiqueSettings {
  totalProductsCount: number;
  categories: Database["public"]["Functions"]["get_categories_unarchived"]["Returns"];
  colors: Database["public"]["Functions"]["get_colors"]["Returns"];
  priceRange: {
    min: number;
    max: number;
  };
}

export const BoutiqueSettingsContext = createContext<BoutiqueSettings>({
  totalProductsCount: 0,
  categories: [],
  colors: [],
  priceRange: {
    min: 0,
    max: 0,
  },
});

export const useBoutiqueSettings = () => useContext(BoutiqueSettingsContext);
export const BoutiqueSettingsProvider = (props: {
  settings: BoutiqueSettings;
  children: ReactNode | ReactNode[];
}) => (
  <BoutiqueSettingsContext.Provider value={props.settings}>
    {props.children}
  </BoutiqueSettingsContext.Provider>
);
