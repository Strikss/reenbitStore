import { ProductsType } from "../../../../../interfaces/product";

const mainFilter = (
  products: ProductsType[],
  filterName: string,
  filterStars: number[]
) => {
  const filteredByName = products.filter((prod) => {
    if (filterName === "") {
      return prod;
    } else if (prod.name.toLowerCase().includes(filterName.toLowerCase())) {
      return prod;
    }
  });
  const filteredByStars = filteredByName.filter((prod) => {
    if (filterStars.length === 1) {
      return prod;
    } else if (filterStars.includes(prod.rating)) {
      return prod;
    }
  });
  return filteredByStars;
};

export default mainFilter;
