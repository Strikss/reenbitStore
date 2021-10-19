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
  FETCH_ALL_PRODUCTS_SUCCESS = "FETCH_ALL_PRODUCTS_SUCCESS",
  FETCH_ALL_PRODUCTS_ERROR = "FETCH_ALL_PRODUCTS_ERROR",
  FETCH_ALL_PRODUCTS_PAGE = "FETCH_ALL_PRODUCTS_PAGE",
}
export interface FetchAllProductsAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS;
}
export interface FetchAllProductsSuccessAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS_SUCCESS;
  payload: any;
}
export interface FetchAllProductsErrorAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS_ERROR;
  payload: string;
}
export interface FetchAllProductsPageAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS_PAGE;
  payload: number;
}

export type AllProductsAction =
  | FetchAllProductsAction
  | FetchAllProductsSuccessAction
  | FetchAllProductsErrorAction
  | FetchAllProductsPageAction;
