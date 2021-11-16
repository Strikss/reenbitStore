import { Input } from "antd";
import React, { useState } from "react";
import { useAppSelector } from "../../../hooks/selectorHook";
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
  const { boughtProducts } = useAppSelector((state) => state.products);

  //SUFFIX
  const isDisabled = promoCode !== promo || boughtProducts.length < 1;

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
