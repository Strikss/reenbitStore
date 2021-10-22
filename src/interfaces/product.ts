export interface AllProductsState {
  fruits: FruitsType[];
  filterName: string;
  filterStars: number[];
}
export interface FruitsType {
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
}
