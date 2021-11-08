import React from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./Products.module.css";

const Products: React.FC = () => {
  //HOOKS
  const { products, currentID } = useAppSelector((state) => state.products);

  //FILTERED PRODUCTS
  const filteredProducts = products.filter((prod) => prod.itemID !== currentID);
  const moreProducts = filteredProducts.slice(0, 4).map((prod, i) => (
    <li key={i}>
      <Product product={prod} />
    </li>
  ));

  return <ul className={style.container}>{moreProducts}</ul>;
};

export default Products;
