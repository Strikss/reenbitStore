import React from "react";
import style from "./ContentFooter.module.css";
import Products from "./products/Products";
import arrow from "../../../assets/images/arrow.svg";

const ContentFooter: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.leftTitle}>You will maybe love</h1>
        <h1 className={style.rightTitle}>
          <span>More products</span>
          <img className={style.arrow} src={arrow} alt="arrow" />
        </h1>
      </div>
      <Products />
    </div>
  );
};

export default ContentFooter;
