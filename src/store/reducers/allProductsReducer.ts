import {
  AllProductsAction,
  AllProductsActionTypes,
  AllProductsState,
} from "../../types/allProductsType";

const initialState: AllProductsState = {
  fruits: [
    {
      itemID: "",
      itemName: "Banan",
      itemPriceHalf: 50,
      itemPriceFull: 100,
      freshness: "new",
      delivery: "europe",
      stock: 320,
      itemCategory: "Fruits",
      farm: "farm hello",
      description: "best product",
      rating: 4,
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
