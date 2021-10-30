import { ProductsType } from "../../../interfaces/product";

export const filterByCategories = (
  products: ProductsType[],
  filterCategories: string
) =>
  products.filter((prod) => {
    if (filterCategories === "") {
      return prod;
    } else if (prod.category.toLowerCase() === filterCategories.toLowerCase()) {
      return prod;
    }
  });
