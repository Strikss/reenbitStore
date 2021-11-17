import React from "react";
import FormInformation from "./formInformation/FormInformation";
import style from "./FormContent.module.css";
import Summary from "./summary/Summary";

const FormContent: React.FC = () => {
  return (
    <div className={style.container}>
      <FormInformation />
      <Summary />
    </div>
  );
};

export default FormContent;
