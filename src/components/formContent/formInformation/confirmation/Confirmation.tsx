import React from "react";
import CheckBox from "../../../custom/checkBox/CheckBox";
import style from "./Confirmation.module.css";

const Confirmation: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1>Confirmation</h1>
        <p className={style.infoDescription}>
          We are getting to the end. Just few clicks and your order si ready!
        </p>
      </div>
      <ul className={style.chexBoxContainer}>
        <li className={style.item}>
          <CheckBox />
          <p>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </p>
        </li>
        <li className={style.item}>
          <CheckBox />
          <p>
            I agree with our <u>terms and conditions</u> and{" "}
            <u>privacy policy</u>.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Confirmation;
