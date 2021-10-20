export interface AllProductsState {
  fruits: [FruitsType];
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
  itemType: string;
  description: string;
}
export enum AllProductsActionTypes {
  FETCH_ALL_PRODUCTS = "FETCH_ALL_PRODUCTS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}
export interface FetchAllProductsAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS;
  payload: any;
}
export interface FetchProductsErrorAction {
  type: AllProductsActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}
export type AllProductsAction =
  | FetchAllProductsAction
  | FetchProductsErrorAction;
