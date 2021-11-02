import { ProductsType } from "../../../interfaces/product";

export const filterByPrice = (
  filteredByPrice: ProductsType[],
  filterPrice: number[]
) =>
  filteredByPrice.filter((prod) => {
    if (
      filterPrice.length === 1 ||
      (prod.priceHalf >= filterPrice[0] && prod.priceHalf <= filterPrice[1])
    ) {
      return prod;
    }
  });
