import { ProductsType } from "../../interfaces/product";

export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_STARS = "FILTER_BY_STARS";

export interface AllProductsState {
  products: ProductsType[];
  filterName: string;
  filterStars: number[];
}
export interface FetchAllProductsAction {
  type: typeof FETCH_ALL_PRODUCTS;
  payload: any;
}
export interface FilterByNameAction {
  type: typeof FILTER_BY_NAME;
  payload: string;
}
export interface FilterByStarsAction {
  type: typeof FILTER_BY_STARS;
  payload: number;
}
export interface FetchProductsErrorAction {
  type: typeof FETCH_PRODUCTS_ERROR;
  payload: string;
}
export type AllProductsAction =
  | FetchAllProductsAction
  | FetchProductsErrorAction
  | FilterByNameAction
  | FilterByStarsAction;
