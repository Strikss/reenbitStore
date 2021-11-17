import { Alert, Form, Input } from "antd";
import React, { useState } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import style from "./PromoCode.module.css";

interface Props {
  name: string;
  id: string;
  placeholder: string;
  suffixText: string;
  promoCode: string;
  max: number;
}
const PromoCode: React.FC<Props> = ({
  placeholder,
  suffixText = "",
  promoCode,
  max = 50,
  name,
  id,
}) => {
  //HOOKS
  const [form] = Form.useForm();
  const { setDiscount } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);

  //SUFFIX
  const suffix = (
    <button
      disabled={boughtProducts.length < 1 || success === true}
      type="submit"
      className={style.suffix}
    >
      {suffixText}
    </button>
  );

  //FORM FUNCTIONS
  const onSuccess = () => {
    setDiscount();
    setSuccess(true);
    setAlert(false);
  };
  const onError = () => {
    setSuccess(false);
    setAlert(true);
  };
  const onFinish = (values: { [key: string]: string }) => {
    values[name] == promoCode ? onSuccess() : onError();
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      id={id}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}
    >
      <Form.Item name={name}>
        <span className={style.inputContainer}>
          <Input
            placeholder={placeholder}
            bordered={false}
            size="large"
            suffix={suffix}
            allowClear
            maxLength={max}
          />
        </span>
      </Form.Item>
      {alert ? (
        <Alert message="Enter a valid code" type="error" showIcon />
      ) : null}
      {success ? <Alert message="Success" type="success" showIcon /> : null}
    </Form>
  );
};

export default PromoCode;
