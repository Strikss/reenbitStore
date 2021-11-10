import React from "react";
import ContentBody from "./contentBody/ContentBody";
import style from "./ContentDesc.module.css";
import Slider from "./slider/ContentFooter";

const ContentDesc: React.FC = () => {
  return (
    <div className={style.container}>
      <ContentBody />
      <Slider />
    </div>
  );
};

export default ContentDesc;
