import { Button } from "antd";
import React from "react";
import style from "./Reset.module.css";

const Reset: React.FC = () => {
  return (
    <div className={style.reset}>
      <Button type="text" size={"middle"} className={style.resetn}>
        <span className={style.resetText}>Reset</span>
      </Button>
    </div>
  );
};

export default Reset;
