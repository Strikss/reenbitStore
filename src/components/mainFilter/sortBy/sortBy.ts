import {
  PRICE_LOW,
  PRICE_HIGH,
  RATING,
} from "../../../interfaces/componentConstants";
import { ProductsType } from "../../../interfaces/product";

export const sortBy = (products: ProductsType[], sortBy: string) =>
  products.sort((firstEl, secondEl) => {
    switch (sortBy) {
      case PRICE_LOW:
        return firstEl.priceHalf - secondEl.priceHalf;
      case PRICE_HIGH:
        return secondEl.priceHalf - firstEl.priceHalf;
      case RATING:
        return secondEl.rating - firstEl.rating;
      default:
        return 0;
    }
  });
