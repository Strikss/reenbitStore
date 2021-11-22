import {
  BUY_PRODUCT,
  REMOVE_PRODUCT,
  SET_CURRENT_ID,
} from "../types/allProducts/constansts";
import {
  AllProductsState,
  AllProductsAction,
} from "../types/allProducts/allProducts";
import {
  FETCH_ALL_PRODUCTS,
  FILTER_BY_NAME,
  FILTER_BY_STARS,
  FILTER_BY_CATEGORIES,
  FILTERED_PRODUCT_COUNT,
  SET_CURRENT_PAGE,
  SET_PRODUCT_PORTION,
  SET_SORT_BY,
  FILTER_BY_FARMS,
  FILTER_BY_PRICE,
  RESET,
} from "../types/allProducts/constansts";

const initialState: AllProductsState = {
  products: [
    {
      itemID: "0",
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
      country: "",
      deliverIn: 0,
      color: "",
      questions: 0,
      reviews: 0,
      buyBy: [""],
    },
  ],
  filterName: "",
  filterStars: [0],
  currentPage: 1,
  productPortion: 4,
  filteredProductCount: 0,
  filterCategories: "",
  sortBy: "",
  filterFarms: [""],
  filterPrice: [0],
  currentID: "",
  boughtProducts: [],
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
      const newProductPortion = state.productPortion + 4;
      return {
        ...state,
        productPortion: newProductPortion,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    case FILTER_BY_FARMS:
      return {
        ...state,
        filterFarms: state.filterFarms.includes(action.payload)
          ? [...state.filterFarms.filter((el) => el !== action.payload)]
          : [...state.filterFarms, action.payload],
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        filterPrice: action.payload,
      };
    case RESET:
      return {
        ...state,
        filterName: "",
        filterStars: [0],
        currentPage: 1,
        productPortion: 4,
        filterCategories: "",
        sortBy: "",
        filterFarms: [""],
        filterPrice: [0],
        currentID: "",
      };
    case SET_CURRENT_ID: {
      return {
        ...state,
        currentID: action.payload,
      };
    }
    case BUY_PRODUCT: {
      return {
        ...state,
        boughtProducts: [...state.boughtProducts, action.payload],
      };
    }
    case REMOVE_PRODUCT: {
      return {
        ...state,
        boughtProducts: state.boughtProducts.filter(
          (prod) => prod !== action.payload
        ),
      };
    }
    default:
      return state;
  }
};
