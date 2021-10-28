export const FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_STARS = "FILTER_BY_STARS";
export const FILTERED_PRODUCT_COUNT = "FILTERED_PRODUCT_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_PRODUCT_PORTION = "SET_PRODUCT_PORTION";

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
export interface FilteredProductCountAction {
  type: typeof FILTERED_PRODUCT_COUNT;
  payload: number;
}
export interface SetCurrentPage {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
}
export interface SetProductPortion {
  type: typeof SET_PRODUCT_PORTION;
}
export interface FetchProductsErrorAction {
  type: typeof FETCH_PRODUCTS_ERROR;
  payload: string;
}

export type AllProductsAction =
  | FetchAllProductsAction
  | FetchProductsErrorAction
  | FilterByNameAction
  | FilterByStarsAction
  | FilteredProductCountAction
  | SetCurrentPage
  | SetProductPortion;
