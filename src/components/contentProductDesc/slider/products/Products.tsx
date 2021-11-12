import React from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { ProductsType } from "../../../../interfaces/product";
import Product from "./product/Product";
import style from "./Products.module.css";

interface Props {
  filteredProducts: ProductsType[];
}

const Products: React.FC<Props> = ({ filteredProducts }) => {
  //HOOKS
  const { productPortion } = useAppSelector((state) => state.products);
  //PAGINATION
  const from = 0;
  const to = productPortion;

  //CLEAN PRODUCTS
  const moreProducts = filteredProducts.slice(from, to).map((prod, i) => (
    <li key={i} className={style.item}>
      <Product product={prod} />
    </li>
  ));

  return <ul className={style.container}>{moreProducts}</ul>;
};

export default Products;
