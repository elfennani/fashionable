import { Database } from "./database.types";

type SlideShow = Database["public"]["Tables"]["slideshow"]["Row"];

type ProductListingType = {
  type: "product-listing";
  category?: {
    id: number;
    label: string;
  };
  color?: {
    id: number;
    label: string;
  };
  sort: string;
};

type CollectionType = {
  type: "collection";
  label: string;
  collectionId: number;
};

type ExternalType = {
  type: "external";
  link: string;
};

export type SlideDirectionType =
  | ProductListingType
  | CollectionType
  | ExternalType;

interface Banner extends SlideShow {
  direction: SlideDirectionType;
}

export default Banner;
