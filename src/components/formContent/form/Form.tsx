import React from "react";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import BillingInfo from "./billingInfo/BillingInfo";
import Confirmation from "./confirmation/Confirmation";
import style from "./Form.module.css";

const Form: React.FC = () => {
  return (
    <div className={style.container}>
      <BillingInfo />
      <AdditionalInfo />
      <Confirmation />
    </div>
  );
};

export default Form;
