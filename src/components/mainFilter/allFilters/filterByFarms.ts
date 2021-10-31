import { ProductsType } from "../../../interfaces/product";

export const filterByFarms = (
  filteredByFarms: ProductsType[],
  filterFarms: string[]
) =>
  filteredByFarms.filter((prod) => {
    if (filterFarms.length === 1) {
      return prod;
    } else if (filterFarms.includes(prod.farm)) {
      return prod;
    }
  });
