import { Button } from "antd";
import React from "react";
import { useAction } from "../../../../../hooks/useAction";
import style from "./Reset.module.css";

const Reset: React.FC = () => {
  const { reset } = useAction();

  return (
    <div className={style.reset}>
      <Button
        type="text"
        size={"middle"}
        className={style.reset}
        onClick={() => reset()}
      >
        <span className={style.resetText}>Reset</span>
      </Button>
    </div>
  );
};

export default Reset;
