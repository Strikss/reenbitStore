import React from "react";
import CustomFormField from "../../../custom/customFormField/CustomFormField";
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
          <CustomFormField placeholder="First name" />
        </li>
        <li className={style.oneForm}>
          <h3>Last name</h3>
          <CustomFormField placeholder="Last name" />
        </li>
        <li className={style.oneForm}>
          <h3>Email address</h3>
          <CustomFormField placeholder="Email address" />
        </li>
        <li className={style.oneForm}>
          <h3>Phone number</h3>
          <CustomFormField placeholder="Phone number" />
        </li>
        <li className={style.oneForm}>
          <h3>Address</h3>
          <CustomFormField placeholder="Address" />
        </li>
        <li className={style.oneForm}>
          <h3>Town / City</h3>
          <CustomFormField placeholder="Town / City" />
        </li>
        <li className={style.oneForm}>
          <h3>State / Country</h3>
          <CustomFormField placeholder="State / Country" />
        </li>
        <li className={style.oneForm}>
          <h3>ZIP / Postal code</h3>
          <CustomFormField placeholder="ZIP / Postal code" />
        </li>
      </ul>
    </div>
  );
};

export default BillingInfo;
