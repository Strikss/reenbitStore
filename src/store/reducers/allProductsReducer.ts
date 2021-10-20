import {
  AllProductsAction,
  AllProductsActionTypes,
  AllProductsState,
} from "../../types/allProductsType";

const initialState: AllProductsState = {
  fruits: [
    {
      itemID: "",
      itemName: "",
      itemPriceHalf: 0,
      itemPriceFull: 0,
      freshness: "",
      delivery: "",
      stock: 0,
      itemCategory: "",
      itemType: "",
      description: "",
    },
  ],
};

export const allProductsReducer = (
  state = initialState,
  action: AllProductsAction
): AllProductsState => {
  switch (action.type) {
    case AllProductsActionTypes.FETCH_ALL_PRODUCTS:
      return { ...state, fruits: action.payload };

    default:
      return state;
  }
};
