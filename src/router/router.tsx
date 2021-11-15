import AllProducts from "../pages/allProducts/AllProducts";
import ProductDescription from "../pages/productDescription/ProductDescription";
import ShoppingCart from "../pages/shoppingCart/ShoppingCart";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  breadcrumbName?: string;
}
export enum RouteNames {
  ALL_PRODUCTS = "/",
  PRODUCT_DESCRIPTION = "",
  SHOPPING_CART = "/shopping-cart",
}

export const Routes: IRoute[] = [
  {
    path: RouteNames.ALL_PRODUCTS,
    component: AllProducts,
    exact: true,
    breadcrumbName: "All products",
  },
  {
    path: RouteNames.PRODUCT_DESCRIPTION + "/:id",
    component: ProductDescription,
    exact: true,
    breadcrumbName: "All products",
  },
  {
    path: RouteNames.SHOPPING_CART,
    component: ShoppingCart,
    exact: true,
    breadcrumbName: "Checkout page",
  },
];
