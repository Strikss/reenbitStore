import React from "react";
import style from "./ContentActions.module.css";
import arrow from "../../../assets/images/arrow.svg";

const ContentActions: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>Sort by</div>
      <div className={style.right}>
        <span>Select</span>
        <img className={style.dropDown} src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default ContentActions;
