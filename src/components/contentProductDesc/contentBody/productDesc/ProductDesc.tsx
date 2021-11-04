import React from "react";
import TopPart from "./topPart/TopPart";
import style from "./ProductDesc.module.css";
import BottomPart from "./bottomPart/BottomPart";

const ProductDesc: React.FC = () => {
  return (
    <div className={style.container}>
      <TopPart />
      <BottomPart />
    </div>
  );
};

export default ProductDesc;
