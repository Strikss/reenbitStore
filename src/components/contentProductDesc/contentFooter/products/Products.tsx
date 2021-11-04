import React from "react";
import Product from "./product/Product";
import style from "./Products.module.css";

const Products: React.FC = () => {
  return (
    <div className={style.container}>
      <Product />
    </div>
  );
};

export default Products;
