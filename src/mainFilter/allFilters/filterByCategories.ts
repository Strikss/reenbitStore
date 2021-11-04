import { ProductsType } from "../../interfaces/product";

export const filterByCategories = (
  products: ProductsType[],
  filterCategories: string
) =>
  products.filter((prod) => {
    if (
      filterCategories === "" ||
      prod.category.toLowerCase() === filterCategories.toLowerCase()
    ) {
      return prod;
    }
  });
