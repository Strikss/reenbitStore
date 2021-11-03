import { SortBy } from "../../../enums/products/products";
import { ProductsType } from "../../../interfaces/product";

export const sortBy = (products: ProductsType[], sortBy: string) =>
  products.sort((firstEl, secondEl) => {
    switch (sortBy) {
      case SortBy.PRICE_LOW:
        return firstEl.priceHalf - secondEl.priceHalf;
      case SortBy.PRICE_HIGH:
        return secondEl.priceHalf - firstEl.priceHalf;
      case SortBy.RATING:
        return secondEl.rating - firstEl.rating;
      default:
        return 0;
    }
  });
