import React from "react";
import Product from "./product/Product";
import style from "./Products.module.css";

const Products: React.FC = () => {
  const Products = Array(5)
    .fill(0)
    .map((el, i) => (
      <li key={i}>
        <Product />
      </li>
    ));
  return <ul className={style.container}>{Products}</ul>;
};

export default Products;
