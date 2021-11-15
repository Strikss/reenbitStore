import { Input } from "antd";
import React from "react";
import style from "./AdditionalInfo.module.css";

const AdditionalInfo: React.FC = () => {
  const { TextArea } = Input;

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1>Additional informations</h1>
        <p className={style.infoDescription}>
          Need something else? We will make it for you!
        </p>
      </div>
      <div className={style.notes}>
        <h3>Order notes</h3>
        <div className={style.textArea}>
          <TextArea
            placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
            rows={7}
            bordered={false}
            maxLength={500}
            style={{ resize: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
