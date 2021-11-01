import {
  SET_CURRENT_PAGE,
  SET_PRODUCT_PORTION,
} from "./../../types/reducers/allProducts";
import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Dispatch } from "redux";
import {
  AllProductsAction,
  FETCH_ALL_PRODUCTS,
  FETCH_PRODUCTS_ERROR,
  FILTERED_PRODUCT_COUNT,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
} from "../../types/reducers/allProducts";

export const fetchProducts =
  () => async (dispatch: Dispatch<AllProductsAction>) => {
    try {
      await onSnapshot(collection(db, "products"), (snapshot) => {
        const response = snapshot.docs.map((doc) => doc.data());
        dispatch({
          type: FETCH_ALL_PRODUCTS,
          payload: response,
        });
      });
    } catch (e: any) {
      dispatch({
        type: FETCH_PRODUCTS_ERROR,
        payload: "an error has occured",
      });
    }
  };
export const filterByName = (e: string): AllProductsAction => {
  return { type: FILTER_BY_NAME, payload: e };
};
export const filterByStars = (e: number): AllProductsAction => {
  return { type: FILTER_BY_STARS, payload: e };
};
export const filterProductCount = (e: number): AllProductsAction => {
  return { type: FILTERED_PRODUCT_COUNT, payload: e };
};
export const setCurrentPage = (e: number): AllProductsAction => {
  return { type: SET_CURRENT_PAGE, payload: e };
};
export const setProductPortion = (): AllProductsAction => {
  return { type: SET_PRODUCT_PORTION };
};
