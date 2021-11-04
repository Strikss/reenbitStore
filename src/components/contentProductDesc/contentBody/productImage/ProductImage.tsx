import React from "react";
import style from "./ProductImage.module.css";

const ProductImage: React.FC = () => {
  return (
    <div className={style.container}>
      <div>discount here</div>
      <div className={style.imageContainer}>
        <img className={style.upperImage} src="#" alt="first image" />
        <img src="#" alt="second image" />
        <img src="#" alt="third image" />
      </div>
    </div>
  );
};

export default ProductImage;
