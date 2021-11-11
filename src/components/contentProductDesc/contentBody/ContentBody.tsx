import React from "react";
import style from "./ContentBody.module.css";
import ProductDesc from "./productDesc/ProductDesc";
import ProductImage from "./productImage/ProductImage";

const ContentBody: React.FC = () => {
  return (
    <div className={style.container}>
      <ProductImage />
      <ProductDesc />
    </div>
  );
};

export default ContentBody;
