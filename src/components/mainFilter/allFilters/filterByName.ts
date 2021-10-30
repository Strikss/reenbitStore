import { ProductsType } from "../../../interfaces/product";

export const filterByName = (products: ProductsType[], filterName: string) =>
  products.filter((prod) => {
    if (filterName === "") {
      return prod;
    } else if (prod.name.toLowerCase().includes(filterName.toLowerCase())) {
      return prod;
    }
  });
