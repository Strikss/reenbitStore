import React from "react";
import BuyButton from "../../custom/buttons/buyButton/BuyButton";
import AdditionalInfo from "./additionalInfo/AdditionalInfo";
import BillingInfo from "./billingInfo/BillingInfo";
import Confirmation from "./confirmation/Confirmation";
import style from "./FormInformation.module.css";

const Form: React.FC = () => {
  return (
    <div className={style.container}>
      <BillingInfo />
      <AdditionalInfo />
      <Confirmation />
      <BuyButton type="completeOrder" />
    </div>
  );
};

export default Form;
