type LandingPageSection =
  | {
      type: "product-listing-custom-search";
      index: number;
      id: string;
      title: string;
      limit: number;
      buttonIncluded?: boolean;
      category?: {
        id: number;
        label: string;
      };
      color?: {
        id: number;
        label: string;
      };
      sort: string;
    }
  | {
      type: "product-listing-collection";
      index: number;
      id: string;
      title: string;
      limit: number;
      buttonIncluded?: boolean;
      collection: {
        id: number;
        label: string;
      };
    }
  | {
      type: "collection-thumbnail";
      index: number;
      id: string;
      title: string;
      description?: string;
      thumbnail_url: string;
      collection: {
        id: number;
        label: string;
      };
    };

export default LandingPageSection;
