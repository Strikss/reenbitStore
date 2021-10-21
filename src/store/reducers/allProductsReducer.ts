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
      farm: "",
      description: "",
      rating: 0,
    },
  ],
  filterName: "",
  filterStars: [0],
};

export const allProductsReducer = (
  state = initialState,
  action: AllProductsAction
): AllProductsState => {
  switch (action.type) {
    case AllProductsActionTypes.FETCH_ALL_PRODUCTS:
      return { ...state, fruits: action.payload };
    case AllProductsActionTypes.FILTER_BY_NAME:
      return { ...state, filterName: action.payload };
    case AllProductsActionTypes.FILTER_BY_STARS:
      return { ...state, filterStars: action.payload };
    default:
      return state;
  }
};
