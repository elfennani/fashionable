import BoutiqueFilters from "./boutique-filters";
import FilteredProductsList from "./filtered-products-list";
import FiltersButton from "./filters-button";
import SearchInput from "./search-input";
import SortingSelect from "./sorting-select";

const BoutiqueContent = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <BoutiqueFilters />
      </div>
      <div className="flex flex-col gap-6 lg:gap-12">
        <div className="flex max-lg:flex-col-reverse gap-4 lg:gap-6 lg:items-center">
          <div className="flex flex-1 xl:items-center gap-2 xl:gap-6 flex-col xl:flex-row">
            <SearchInput />
          </div>
          <div className="flex flex-wrap max-lg:flex-1 gap-2 sm:gap-6 lg:gap-0 items-center">
            <label htmlFor="sorting" className="font-light">
              Trier par:
            </label>
            <SortingSelect />
            <div className="h-4/5 w-px bg-neutral-200" />
            <FiltersButton />
          </div>
        </div>
        <FilteredProductsList />
      </div>
    </>
  );
};

export default BoutiqueContent;
