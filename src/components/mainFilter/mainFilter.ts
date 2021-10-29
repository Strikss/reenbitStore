import { ProductsType } from "../../interfaces/product";
import { filterByCategories } from "./filterByCategories";
import { filterByName } from "./filterByName";
import { filterByStars } from "./filterByStars";

const mainFilter = (
  products: ProductsType[],
  filterName: string,
  filterStars: number[],
  filterCategories: string
) => {
  const filteredByName = filterByName(products, filterName);
  const filteredByStars = filterByStars(filteredByName, filterStars);
  const filteredByCategories = filterByCategories(
    filteredByStars,
    filterCategories
  );

  return filteredByCategories;
};

export default mainFilter;
