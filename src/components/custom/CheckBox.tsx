import React from "react";
import style from "./CheckBox.module.css";

const CheckBox: React.FC = () => {
  return (
    <label className={style.container}>
      <input type="checkbox" />
      <span className={style.checkmark}></span>
    </label>
  );
};

export default CheckBox;
