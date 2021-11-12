import { applyMiddleware, createStore, Dispatch } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers/rootReducer/rootReducer";
import { AllProductsAction } from "./types/allProducts/allProducts";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type appDispatch = () => (
  dispatch: Dispatch<AllProductsAction>
) => Promise<void>;
