import React from "react";
import style from "./Product.module.css";

const Product: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.image}>image here</div>
      <div className={style.description}>
        <div className={style.topPart}>
          <h1>Product Title</h1>
          <p>product description</p>
        </div>
        <div className={style.bottomPart}>
          <h1 className={style.price}>3.26 USD</h1>
          <button className={style.button}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
