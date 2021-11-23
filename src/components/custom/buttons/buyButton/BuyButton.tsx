import React from "react";
import style from "./BuyButton.module.css";

interface Props {
  type: "detail" | "pagination" | "buyBig" | "buySmall" | "completeOrder";
  text: string;
  suffix?: string;
  prefix?: string;
  disabled?: boolean;
  handleClick?: () => void;
  form?: string;
}

const BuyButton: React.FC<Props> = ({
  handleClick = () => {},
  type,
  text,
  suffix = "",
  prefix = "",
  form = "",
  disabled = false,
}) => {
  return (
    <button
      className={`${style.button} ${style[type]}`}
      onClick={() => handleClick()}
      type="submit"
      form={form}
      disabled={disabled}
    >
      {prefix && <span className={style.plus}>{prefix}</span>}
      <span>{text}</span>
      {suffix && <img className={style.suffix} src={suffix} alt="arrow" />}
    </button>
  );
};

export default BuyButton;
