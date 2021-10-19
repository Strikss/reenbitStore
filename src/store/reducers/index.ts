import { combineReducers } from "redux";
import { allProductsReducer } from "./allProductsReducer";

export const rootReducer = combineReducers({
  products: allProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
