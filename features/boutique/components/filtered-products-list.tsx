import ProductList from "@/components/product-list";
import Pagination from "./pagination";

const FilteredProductsList = () => {
  return (
    <>
      <ProductList products={[]} />
      <Pagination maxPages={1} />
    </>
  );
};

export default FilteredProductsList;
