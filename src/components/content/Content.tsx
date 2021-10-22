import React from "react";
import ProductList from "./productList/ProductList";
import SortBy from "./sortBy/SortBy";
import style from "./Content.module.css";
import { useAppSelector } from "../../hooks/selectorHook";

const Content: React.FC = () => {
  const { fruits } = useAppSelector((state) => state.products);
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>All Products</h1>
        <div>
          <span className={style.totalCount}>{fruits.length}</span>
          <span className={style.products}>Products</span>
        </div>
      </div>
      <SortBy />
      <ProductList />
    </>
  );
};

export default Content;
