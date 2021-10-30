import {
  PRICE_LOW,
  PRICE_HIGH,
  RATING,
} from "./../../../interfaces/componentConstants";
import { ProductsType } from "../../../interfaces/product";

export const sortByfn = (products: ProductsType[], sortBy: string) =>
  products.sort((firstEl, secondEl) => {
    if (sortBy === "") {
      return 0;
    } else if (sortBy === PRICE_LOW) {
      return firstEl.priceHalf - secondEl.priceHalf;
    } else if (sortBy === PRICE_HIGH) {
      return secondEl.priceHalf - firstEl.priceHalf;
    } else if (sortBy === RATING) {
      return secondEl.rating - firstEl.rating;
    }
    return 0;
  });
