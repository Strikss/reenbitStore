import React from "react";
import ContentActions from "./contentActions/ContentActions";
import style from "./Content.module.css";
import ContentHeader from "./contentHeader/ContentHeader";
import ContentBody from "./contentBody/ContentBody";

const Content: React.FC = () => {
  return (
    <div className={style.contentContainer}>
      <ContentHeader />
      <ContentActions />
      <ContentBody />
    </div>
  );
};

export default Content;
