import { ProductsType } from "../../interfaces/product";

export const filterByFarms = (
  filteredByFarms: ProductsType[],
  filterFarms: string[]
) =>
  filteredByFarms.filter((prod) => {
    if (filterFarms.length === 1 || filterFarms.includes(prod.farm)) {
      return prod;
    }
  });
