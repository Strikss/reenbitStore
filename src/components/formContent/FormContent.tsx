import React from "react";
import Form from "./form/Form";
import style from "./FormContent.module.css";
import Summary from "./summary/Summary";

const FormContent: React.FC = () => {
  return (
    <div className={style.container}>
      <Form />
      <Summary />
    </div>
  );
};

export default FormContent;
