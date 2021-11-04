import { combineReducers } from "redux";
import { allProducts } from "../reducers/allProducts";

export const rootReducer = combineReducers({
  products: allProducts,
});
