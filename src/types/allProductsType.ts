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
}
export interface FetchAllProductsAction {
  type: AllProductsActionTypes.FETCH_ALL_PRODUCTS;
}

export type AllProductsAction = FetchAllProductsAction;
