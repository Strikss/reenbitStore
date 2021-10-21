import db from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Dispatch } from "redux";
import {
  AllProductsAction,
  AllProductsActionTypes,
} from "../../types/allProductsType";
export const fetchProducts =
  () => async (dispatch: Dispatch<AllProductsAction>) => {
    try {
      await onSnapshot(collection(db, "fruits"), (snapshot) => {
        const response = snapshot.docs.map((doc) => doc.data());
        dispatch({
          type: AllProductsActionTypes.FETCH_ALL_PRODUCTS,
          payload: response,
        });
      });
    } catch (e: any) {
      dispatch({
        type: AllProductsActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "an error has occured",
      });
    }
  };
export const filterByName = (e: string): AllProductsAction => {
  return { type: AllProductsActionTypes.FILTER_BY_NAME, payload: e };
};
export const filterByStars = (e: [number]): AllProductsAction => {
  return { type: AllProductsActionTypes.FILTER_BY_STARS, payload: e };
};
