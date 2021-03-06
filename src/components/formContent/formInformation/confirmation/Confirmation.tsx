import { Form } from "antd";
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
      <div className={style.checkBoxContainer}>
        <Form.Item
          name="marketingTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <span
            className={style.item}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              e.target.checked
            }
          >
            <CheckBox />
            <span>
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </span>
          </span>
        </Form.Item>
        <Form.Item
          name="privacyTerms"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Should accept agreement")),
            },
          ]}
        >
          <span
            className={style.item}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              e.target.checked
            }
          >
            <CheckBox />
            <span>
              I agree with our <u>terms and conditions</u> and{" "}
              <u>privacy policy</u>.
            </span>
          </span>
        </Form.Item>
      </div>
    </div>
  );
};

export default Confirmation;
