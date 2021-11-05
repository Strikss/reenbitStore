import { ProductsType } from "../../../interfaces/product";

export const filterByStars = (
  filteredByName: ProductsType[],
  filterStars: number[]
) =>
  filteredByName.filter((prod) => {
    if (filterStars.length === 1 || filterStars.includes(prod.rating)) {
      return prod;
    }
  });
