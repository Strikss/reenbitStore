import React from "react";
import style from "./SortBy.module.css";
import arrow from "../../../assets/images/arrow.svg";

const SortBy: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>Sort by</div>
      <div className={style.right}>
        Select <img className={style.dropDown} src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default SortBy;
