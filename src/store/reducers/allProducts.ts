import {
  AllProductsState,
  AllProductsAction,
} from "../../types/reducers/allProducts";
import {
  FETCH_ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
  FILTER_BY_CATEGORIES,
  FILTERED_PRODUCT_COUNT,
  SET_CURRENT_PAGE,
  SET_PRODUCT_PORTION,
  SET_SORT_BY,
} from "../../types/reducers/constansts";

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
  currentPage: 1,
  productPortion: 5,
  filteredProductCount: 0,
  filterCategories: "",
  sortBy: "",
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
    case FILTER_BY_CATEGORIES:
      return {
        ...state,
        filterCategories: action.payload,
      };
    case FILTERED_PRODUCT_COUNT:
      return {
        ...state,
        filteredProductCount: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_PRODUCT_PORTION:
      const newProductPortion = state.productPortion * 2;
      return {
        ...state,
        productPortion: newProductPortion,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
