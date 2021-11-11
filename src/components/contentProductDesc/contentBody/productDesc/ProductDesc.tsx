import React from "react";
import Context from "./context/Context";
import style from "./ProductDesc.module.css";
import ProductTabs from "./productTabs/ProductTabs";

const ProductDesc: React.FC = () => {
  return (
    <div className={style.container}>
      <Context />
      <ProductTabs />
    </div>
  );
};

export default ProductDesc;
