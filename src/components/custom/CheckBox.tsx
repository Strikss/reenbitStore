import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/selectorHook";
import style from "./CheckBox.module.css";

const CheckBox: React.FC = () => {
  return (
    <label className={style.container}>
      <input type="checkbox" defaultChecked={false} />
      <span className={style.checkmark}></span>
    </label>
  );
};

export default CheckBox;
