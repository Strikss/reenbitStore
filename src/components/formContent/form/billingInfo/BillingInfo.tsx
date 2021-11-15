import React from "react";
import CustomForm from "../../../custom/customForm/CustomForm";
import style from "./BillingInfo.module.css";

const BillingInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1>Billing info</h1>
        <p className={style.infoDescription}>Please enter your billing info</p>
      </div>
      <ul className={style.infoContainer}>
        <li className={style.oneForm}>
          <h3>First name</h3>
          <CustomForm placeholder="First name" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>Last name</h3>
          <CustomForm placeholder="Last name" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>Email address</h3>
          <CustomForm placeholder="Email address" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>Phone number</h3>
          <CustomForm placeholder="Phone number" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>Address</h3>
          <CustomForm placeholder="Address" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>Town / City</h3>
          <CustomForm placeholder="Town / City" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>State / Country</h3>
          <CustomForm placeholder="State / Country" suffixText="" />
        </li>
        <li className={style.oneForm}>
          <h3>ZIP / Postal code</h3>
          <CustomForm placeholder="ZIP / Postal code" suffixText="" />
        </li>
      </ul>
    </div>
  );
};

export default BillingInfo;
