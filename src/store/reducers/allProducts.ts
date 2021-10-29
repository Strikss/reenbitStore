import { AllProductsState } from "../../types/reducers/allProducts";
import {
  AllProductsAction,
  FETCH_ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
} from "../../types/reducers/allProducts";

const initialState: AllProductsState = {
  products: [
    {
      itemID: "",
      name: "",
      priceHalf: 0,
      priceFull: 0,
      freshness: "",
      delivery: "",
      stock: 0,
      category: "",
      farm: "",
      description: "",
      rating: 0,
      image: "",
    },
  ],
  filterName: "",
  filterStars: [0],
};

export const allProducts = (
  state = initialState,
  action: AllProductsAction
): AllProductsState => {
  switch (action.type) {
    case FETCH_ALL_PRODUCTS:
      return { ...state, products: action.payload };
    case FILTER_BY_NAME:
      return { ...state, filterName: action.payload };
    case FILTER_BY_STARS:
      return {
        ...state,
        filterStars: state.filterStars.includes(action.payload)
          ? [...state.filterStars.filter((el) => el !== action.payload)]
          : [...state.filterStars, action.payload],
      };
    default:
      return state;
  }
};
