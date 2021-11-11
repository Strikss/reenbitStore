import React from "react";
import style from "./Slider.module.css";
import Products from "./products/Products";

const Slider: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.leftTitle}>you will maybe love</h1>
        <h1 className={style.rightTitle}>More products </h1>
      </div>
      <div className={style.productContainer}>
        <Products />
      </div>
    </div>
  );
};

export default Slider;
