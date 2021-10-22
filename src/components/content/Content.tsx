import React from "react";
import ProductList from "./productList/ProductList";
import SortBy from "./sortBy/SortBy";
import style from "./Content.module.css";

const Content: React.FC = () => {
  return (
    <>
      <h1 className={style.header}>All Products</h1>
      <SortBy />
      <ProductList />
    </>
  );
};

export default Content;
