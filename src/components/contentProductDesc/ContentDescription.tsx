import React from "react";
import ContentBody from "./contentBody/ContentBody";
import style from "./ContentDescription.module.css";

const ContentDescription: React.FC = () => {
  return (
    <div className={style.container}>
      <ContentBody />
    </div>
  );
};

export default ContentDescription;
