import { combineReducers } from "redux";
import { allProducts } from "./allProducts";

export const rootReducer = combineReducers({
  products: allProducts,
});
