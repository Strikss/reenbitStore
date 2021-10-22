import React from "react";
import Product from "./product/Product";
import style from "./ProductList.module.css";
import SideBar from "./sideBar/SideBar";

const ProductList: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <SideBar />
      </div>
      <div className={style.product}>
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
