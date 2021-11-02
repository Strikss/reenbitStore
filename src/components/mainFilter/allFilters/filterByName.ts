import { ProductsType } from "../../../interfaces/product";

export const filterByName = (products: ProductsType[], filterName: string) =>
  products.filter((prod) => {
    if (
      filterName === "" ||
      prod.name.toLowerCase().includes(filterName.toLowerCase())
    ) {
      return prod;
    }
  });
