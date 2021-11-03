import { ProductsType } from "../../interfaces/product";
import { filterByCategories } from "./allFilters/filterByCategories";
import { filterByName } from "./allFilters/filterByName";
import { filterByStars } from "./allFilters/filterByStars";
import { sortBy } from "./sortBy/sortBy";
import { filterByFarms } from "./allFilters/filterByFarms";
import { filterByPrice } from "./allFilters/filterByPrice";

const mainFilter = (
  products: ProductsType[],
  filterName: string,
  filterStars: number[],
  filterCategories: string,
  sortByWhat: string,
  filterFarms: string[],
  filterPrice: number[]
) => {
  const productsCopy = [...products];
  const sortedBy = sortBy(productsCopy, sortByWhat);
  const filteredByName = filterByName(sortedBy, filterName);
  const filteredByStars = filterByStars(filteredByName, filterStars);
  const filteredByFarms = filterByFarms(filteredByStars, filterFarms);
  const filteredByPrice = filterByPrice(filteredByFarms, filterPrice);
  const filteredByCategories = filterByCategories(
    filteredByPrice,
    filterCategories
  );

  return filteredByCategories;
};

export default mainFilter;
