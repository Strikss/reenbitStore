import React from "react";
import CustomForm from "../../../custom/customForm/CustomForm";
import style from "./BillingInfo.module.css";

interface Props {
  form: any;
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
          <CustomForm placeholder="First name" name="firstName" validate />
        </li>
        <li className={style.oneForm}>
          <label>Last name</label>
          <CustomForm placeholder="Last name" name="lastName" validate />
        </li>
        <li className={style.oneForm}>
          <label>Email address</label>
          <CustomForm
            placeholder="Email address"
            name="email"
            validate
            formType="email"
          />
        </li>
        <li className={style.oneForm}>
          <label>Phone number</label>
          <CustomForm
            placeholder="Phone number"
            formType="number"
            name="phone"
            validate
          />
        </li>
        <li className={style.oneForm}>
          <label>Address</label>
          <CustomForm placeholder="Address" name="address" validate />
        </li>
        <li className={style.oneForm}>
          <label>Town / City</label>
          <CustomForm
            placeholder="Town / City"
            name="city"
            validate
            autoComplete
            form={form}
          />
        </li>
        <li className={style.oneForm}>
          <label>State / Country</label>
          <CustomForm
            placeholder="State / Country"
            name="country"
            validate
            autoComplete
            form={form}
          />
        </li>
        <li className={style.oneForm}>
          <label>ZIP / Postal code</label>
          <CustomForm
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
