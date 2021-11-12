import { ProductsType } from "../../../interfaces/product";
import {
  FETCH_ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
  FILTERED_PRODUCT_COUNT,
  SET_CURRENT_PAGE,
  SET_PRODUCT_PORTION,
  FETCH_PRODUCTS_ERROR,
  FILTER_BY_CATEGORIES,
  SET_SORT_BY,
  FILTER_BY_FARMS,
  FILTER_BY_PRICE,
  RESET,
  SET_CURRENT_ID,
} from "./constansts";

export interface AllProductsState {
  products: ProductsType[];
  filterName: string;
  filterStars: number[];
  currentPage: number;
  productPortion: number;
  filteredProductCount: number;
  filterCategories: string;
  sortBy: string;
  filterFarms: string[];
  filterPrice: number[];
  currentID: string;
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
export interface FilterByCategoriesAction {
  type: typeof FILTER_BY_CATEGORIES;
  payload: string;
}
export interface SetSortBy {
  type: typeof SET_SORT_BY;
  payload: string;
}
export interface FilterByFarmsAction {
  type: typeof FILTER_BY_FARMS;
  payload: string;
}
export interface FilterByPriceAction {
  type: typeof FILTER_BY_PRICE;
  payload: number[];
}
export interface ResetAction {
  type: typeof RESET;
}
export interface SetCurrentID {
  type: typeof SET_CURRENT_ID;
  payload: string;
}

export type AllProductsAction =
  | FetchAllProductsAction
  | FetchProductsErrorAction
  | FilterByNameAction
  | FilterByStarsAction
  | FilteredProductCountAction
  | SetCurrentPage
  | SetProductPortion
  | FilterByCategoriesAction
  | SetSortBy
  | FilterByFarmsAction
  | FilterByPriceAction
  | ResetAction
  | SetCurrentID;
