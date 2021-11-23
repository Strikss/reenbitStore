import { Input } from "antd";
import React from "react";
import style from "./CustomFormField.module.css";

interface Props {
  placeholder: string;
  suffixText?: string;
}
const CustomFormField: React.FC<Props> = ({ placeholder, suffixText = "" }) => {
  const suffix = <span className={style.suffix}>{suffixText}</span>;
  return (
    <div className={style.inputContainer}>
      <Input
        placeholder={placeholder}
        bordered={false}
        size="large"
        suffix={suffix}
      />
    </div>
  );
};

export default CustomFormField;
