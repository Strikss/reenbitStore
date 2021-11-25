import { FormInstance } from "antd";
import React from "react";
import CustomFormField from "../../../custom/customFormField/CustomFormField";
import style from "./BillingInfo.module.css";

interface Props {
  form: FormInstance;
}

const BillingInfo: React.FC<Props> = ({ form }) => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1>Billing info</h1>
        <p className={style.infoDescription}>Please enter your billing info</p>
      </div>
      <ul className={style.infoContainer}>
        <li className={style.oneForm}>
          <label>First name</label>
          <CustomFormField placeholder="First name" name="firstName" validate />
        </li>
        <li className={style.oneForm}>
          <label>Last name</label>
          <CustomFormField placeholder="Last name" name="lastName" validate />
        </li>
        <li className={style.oneForm}>
          <label>Email address</label>
          <CustomFormField
            placeholder="Email address"
            name="email"
            validate
            formType="email"
          />
        </li>
        <li className={style.oneForm}>
          <label>Phone number</label>
          <CustomFormField
            placeholder="Phone number"
            formType="number"
            name="number"
            validate
          />
        </li>
        <li className={style.oneForm}>
          <label>Address</label>
          <CustomFormField placeholder="Address" name="address" validate />
        </li>
        <li className={style.oneForm}>
          <label>Town / City</label>
          <CustomFormField
            placeholder="Town / City"
            name="city"
            validate
            autoComplete
            form={form}
          />
        </li>
        <li className={style.oneForm}>
          <label>State / Country</label>
          <CustomFormField
            placeholder="State / Country"
            name="country"
            validate
            autoComplete
            form={form}
          />
        </li>
        <li className={style.oneForm}>
          <label>ZIP / Postal code</label>
          <CustomFormField
            placeholder="ZIP / Postal code"
            formType="number"
            name="zip"
            validate
          />
        </li>
      </ul>
    </div>
  );
};

export default BillingInfo;
