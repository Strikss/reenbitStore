export interface AllProductsState {
  fruits: [FruitsType];

  filterName: string;
}
export interface FruitsType {
  itemID: string;
  itemName: string;
  itemPriceHalf: number;
  itemPriceFull: number;
  freshness: string;
  delivery: string;
  stock: number;
  itemCategory: string;
  farm: string;
  description: string;
  rating: number;
}
export enum AllProductsActionTypes {
  FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
  FILTER_BY_NAME = "FILTER_BY_NAME",
}
export interface FetchAllProductsAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS;
  payload: any;
}
export interface FilterByNameAction {
  type: AllProductsActionTypes.FILTER_BY_NAME;
  payload: string;
}
export interface FetchProductsErrorAction {
  type: AllProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}
export type AllProductsAction =
  | FetchAllProductsAction
  | FetchProductsErrorAction
  | FilterByNameAction;
