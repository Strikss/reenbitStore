import { ProductsType } from "../../interfaces/product";
import { filterByCategories } from "./allFilters/filterByCategories";
import { filterByName } from "./allFilters/filterByName";
import { filterByStars } from "./allFilters/filterByStars";
import { sortByfn } from "./sortBy/sortByfn";

const mainFilter = (
  products: ProductsType[],
  filterName: string,
  filterStars: number[],
  filterCategories: string,
  sortBy: string
) => {
  const sortedBy = sortByfn(products, sortBy);
  const filteredByName = filterByName(sortedBy, filterName);
  const filteredByStars = filterByStars(filteredByName, filterStars);
  const filteredByCategories = filterByCategories(
    filteredByStars,
    filterCategories
  );

  return filteredByCategories;
};

export default mainFilter;
