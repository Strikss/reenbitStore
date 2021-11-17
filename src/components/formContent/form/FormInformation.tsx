import { Form } from "antd";
import React from "react";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import BillingInfo from "./billingInfo/BillingInfo";
import Confirmation from "./confirmation/Confirmation";
import style from "./FormInformation.module.css";

const FormInformation: React.FC = () => {
  //HOOKS
  const [form] = Form.useForm();

  //FORM FUNCTIONS
  const onFinish = (values: { [key: string]: string }) => {
    console.log(values);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      <Form
        form={form}
        name="basic"
        id="mainForm"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={onFinish}
        onError={onFinishFailed}
      >
        <BillingInfo />
        <AdditionalInfo />
        <Confirmation />
      </Form>
    </div>
  );
};

export default FormInformation;
