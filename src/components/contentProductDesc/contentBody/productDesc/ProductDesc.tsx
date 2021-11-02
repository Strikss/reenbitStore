import React from "react";
import MainPart from "./mainPart/MainPart";
import style from "./ProductDesc.module.css";

const ProductDesc: React.FC = () => {
  return (
    <div className={style.container}>
      <MainPart />
    </div>
  );
};

export default ProductDesc;
