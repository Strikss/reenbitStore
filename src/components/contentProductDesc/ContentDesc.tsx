import React from "react";
import ContentBody from "./contentBody/ContentBody";
import style from "./ContentDesc.module.css";
import ContentFooter from "./contentFooter/ContentFooter";

const ContentDesc: React.FC = () => {
  return (
    <div className={style.container}>
      <ContentBody />
      <ContentFooter />
    </div>
  );
};

export default ContentDesc;
