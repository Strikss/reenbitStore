import AllProducts from "../pages/allProducts/AllProducts";
import ProductDescription from "../pages/productDescription/ProductDescription";
import ShippingCart from "../pages/shippingCart/ShippingCart";

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}
export enum RouteNames {
  ALLPRODUCTS = "/",
  PRODUCT_DESCRIPTION = "/product-description",
  SHOPPING_CART = "/shopping-cart",
}

export const Routes: IRoute[] = [
  {
    path: RouteNames.ALLPRODUCTS,
    component: AllProducts,
    exact: true,
  },
  {
    path: RouteNames.PRODUCT_DESCRIPTION,
    component: ProductDescription,
    exact: true,
  },
  {
    path: RouteNames.SHOPPING_CART,
    component: ShippingCart,
    exact: true,
  },
];
