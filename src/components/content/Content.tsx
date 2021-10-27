import React from "react";
import ContentBody from "./contentBody/ContentBody";
import ContentActions from "./contentActions/ContentActions";
import style from "./Content.module.css";
import ContentHeader from "./contentHeader/ContentHeader";
import Paging from "./pagination/Paging";

const Content: React.FC = () => {
  return (
    <div className={style.contentContainer}>
      <ContentHeader />
      <ContentActions />
      <ContentBody />
      <Paging />
    </div>
  );
};

export default Content;
