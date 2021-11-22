import { ProductsType } from "./../../interfaces/product";
import {
  BUY_PRODUCT,
  REMOVE_PRODUCT,
  SET_CURRENT_ID,
} from "./../types/allProducts/constansts";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { AllProductsAction } from "../types/allProducts/allProducts";
import {
  FETCH_ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
  FILTERED_PRODUCT_COUNT,
  SET_CURRENT_PAGE,
  SET_PRODUCT_PORTION,
  FILTER_BY_CATEGORIES,
  SET_SORT_BY,
  FILTER_BY_FARMS,
  FILTER_BY_PRICE,
  RESET,
} from "../types/allProducts/constansts";
import { appDispatch } from "..";

export const fetchProducts: appDispatch = () => async (dispatch) => {
  try {
    await onSnapshot(collection(db, "products"), (snapshot) => {
      const response = snapshot.docs.map((doc) => doc.data());
      dispatch({
        type: FETCH_ALL_PRODUCTS,
        payload: response,
      });
    });
  } catch (e: any) {}
};
export const filterByName = (name: string): AllProductsAction => {
  return { type: FILTER_BY_NAME, payload: name };
};
export const filterByStars = (star: number): AllProductsAction => {
  return { type: FILTER_BY_STARS, payload: star };
};
export const filterProductCount = (product: number): AllProductsAction => {
  return { type: FILTERED_PRODUCT_COUNT, payload: product };
};
export const setCurrentPage = (page: number): AllProductsAction => {
  return { type: SET_CURRENT_PAGE, payload: page };
};
export const setProductPortion = (): AllProductsAction => {
  return { type: SET_PRODUCT_PORTION };
};
export const filterByCategories = (category: string): AllProductsAction => {
  return { type: FILTER_BY_CATEGORIES, payload: category };
};
export const setSortBy = (sortBy: string): AllProductsAction => {
  return { type: SET_SORT_BY, payload: sortBy };
};
export const filterByFarms = (farm: string): AllProductsAction => {
  return { type: FILTER_BY_FARMS, payload: farm };
};
export const filterByPrice = (price: number[]): AllProductsAction => {
  return {
    type: FILTER_BY_PRICE,
    payload: price,
  };
};
export const reset = (): AllProductsAction => {
  return {
    type: RESET,
  };
};
export const setCurrentID = (id: string): AllProductsAction => {
  return {
    type: SET_CURRENT_ID,
    payload: id,
  };
};
export const buyProduct = (product: ProductsType): AllProductsAction => {
  return {
    type: BUY_PRODUCT,
    payload: product,
  };
};
export const removeProduct = (id: string): AllProductsAction => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
