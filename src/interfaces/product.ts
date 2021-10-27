export interface AllProductsState {
  products: ProductsType[];
  filterName: string;
  filterStars: number[];
  currentPage: number;
  productPortion: number;
  filteredProductCount: number;
}
export interface ProductsType {
  itemID: string;
  name: string;
  priceHalf: number;
  priceFull: number;
  freshness: string;
  delivery: string;
  stock: number;
  category: string;
  farm: string;
  description: string;
  rating: number;
  image: string;
}
