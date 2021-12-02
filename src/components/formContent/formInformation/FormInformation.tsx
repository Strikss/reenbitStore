import { Form } from "antd";
import React, { useEffect, useState } from "react";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import BillingInfo from "./billingInfo/BillingInfo";
import Confirmation from "./confirmation/Confirmation";
import style from "./FormInformation.module.css";
import fireWorks from "../../../assets/images/fireWorks.gif";
import BuyButton from "../../custom/buttons/buyButton/BuyButton";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const FormInformation: React.FC = () => {
  //HOOKS
  const [form] = Form.useForm();
  const { setSuccess } = useAction();
  const [fireworks, setFireworks] = useState(false);
  const boughtProducts = useAppSelector(
    (state) => state.products.boughtProducts
  );

  //FORM FUNCTIONS
  const onFinish = (values: { [key: string]: string }) => {
    localStorage.clear();
    form.resetFields();
    setSuccess();
    document
      .getElementById("shoppingCart")
      ?.scroll({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => {
      setFireworks(true);
    }, 700);
    setTimeout(() => {
      setFireworks(false);
    }, 3000);
  };

  //LOCAL STORAGE
  const onFieldsChange = (e: FieldData[]) => {
    const [firstObject] = e;
    const { name, value } = firstObject;
    console.log(firstObject);
    const nameStr = name.toString();
    if (nameStr !== "privacyTerms" && nameStr !== "marketingTerms") {
      localStorage.setItem(nameStr, value);
    }
    if (localStorage.getItem(nameStr)?.length === 0 || "undefined") {
      localStorage.removeItem(nameStr);
    }
  };

  const setFieldsValue = () => {
    const keys = Object.keys(localStorage);
    keys.forEach((el) => {
      form.setFieldsValue({ [el]: localStorage[el] });
    });
  };
  useEffect(() => {
    setFieldsValue();
  }, []);
  return (
    <div className={style.container}>
      {fireworks ? (
        <img className={style.fireWorks} src={fireWorks} alt="fireWorks" />
      ) : null}
      <Form
        form={form}
        name="basic"
        id="mainForm"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        onFieldsChange={onFieldsChange}
      >
        <BillingInfo form={form} />
        <AdditionalInfo />
        <Confirmation />
        <BuyButton
          type="completeOrder"
          text="Complete order"
          form="mainForm"
          disabled={boughtProducts.length < 1}
        />
      </Form>
    </div>
  );
};

export default FormInformation;
