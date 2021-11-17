import { Form, Input } from "antd";
import React from "react";
import style from "./CustomForm.module.css";

interface Props {
  name: string;
  placeholder: string;
  max?: number;
  formType?: string;
  validate?: boolean;
}
const CustomForm: React.FC<Props> = ({
  placeholder,
  formType = "string",
  max = 50,
  name,
  validate = false,
}) => {
  //HOOKS

  return (
    <Form.Item
      name={name}
      rules={[
        { required: validate, message: `Enter a ${placeholder}` },
        { type: formType === "email" ? "email" : "string" },
      ]}
    >
      <span className={style.inputContainer}>
        <Input
          placeholder={placeholder}
          bordered={false}
          size="large"
          allowClear
          maxLength={max}
          type={formType}
        />
      </span>
    </Form.Item>
  );
};

export default CustomForm;
