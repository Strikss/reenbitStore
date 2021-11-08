import React from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./Products.module.css";

const Products: React.FC = () => {
  //HOOKS
  const { products, currentID, currentPage, productPortion } = useAppSelector(
    (state) => state.products
  );
  //PAGINATION
  const from = currentPage * productPortion - productPortion;
  const to = currentPage * productPortion;

  //FILTERED PRODUCTS
  const filteredProducts = products.filter((prod) => prod.itemID !== currentID);
  const moreProducts = filteredProducts.slice(from, to).map((prod, i) => (
    <li key={i}>
      <Product product={prod} />
    </li>
  ));

  return <ul className={style.container}>{moreProducts}</ul>;
};

export default Products;
