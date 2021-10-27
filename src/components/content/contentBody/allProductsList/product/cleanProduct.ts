import { ProductsType } from "../../../../../interfaces/product";

const cleanProduct = (
  products: ProductsType[],
  filterName: string,
  filterStars: number[]
) => {
  return products.filter((prod) => {
    if (filterName === "" && filterStars.length === 1) {
      return prod;
    } else if (
      prod.name.toLowerCase().includes(filterName.toLowerCase()) &&
      filterStars.length === 1
    ) {
      return prod;
    } else if (
      prod.name.toLowerCase().includes(filterName.toLowerCase()) &&
      filterStars.includes(prod.rating)
    ) {
      return prod;
    }
  });
};

export default cleanProduct;
