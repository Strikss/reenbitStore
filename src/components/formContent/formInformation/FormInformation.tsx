import { Form } from "antd";
import React, { useState } from "react";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import BillingInfo from "./billingInfo/BillingInfo";
import Confirmation from "./confirmation/Confirmation";
import style from "./FormInformation.module.css";
import fireWorks from "../../../assets/images/fireWorks.gif";
import BuyButton from "../../custom/buttons/buyButton/BuyButton";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";

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
    form.resetFields();
    setSuccess();
    document
      .getElementById("shoppingCart")
      ?.scroll({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => {
      setFireworks(true);
    }, 700);
  };

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
