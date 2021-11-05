import React from "react";
import Product from "./product/Product";
import style from "./Products.module.css";

const Products: React.FC = () => {
  const Products = Array(5)
    .fill(0)
    .map((el) => <Product />);
  return <div className={style.container}>{Products}</div>;
};

export default Products;
