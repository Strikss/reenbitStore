import { Input } from "antd";
import React, { useState } from "react";
import { useAction } from "../../../hooks/useAction";
import style from "./CustomForm.module.css";

interface Props {
  placeholder: string;
  suffixText?: string;
  promoCode?: string;
}
const CustomForm: React.FC<Props> = ({
  placeholder,
  suffixText = "",
  promoCode,
}) => {
  //HOOKS
  const [promo, setPromo] = useState("");
  const { setDiscount } = useAction();

  //SUFFIX
  const isDisabled = promoCode !== promo;

  const suffix = (
    <button
      disabled={isDisabled}
      onClick={setDiscount}
      className={style.suffix}
    >
      {suffixText}
    </button>
  );

  return (
    <div className={style.inputContainer}>
      <Input
        placeholder={placeholder}
        bordered={false}
        size="large"
        suffix={suffix}
        allowClear
        maxLength={10}
        onChange={(e) => setPromo(e.target.value)}
        value={promo}
      />
    </div>
  );
};

export default CustomForm;
