import React from "react";
import ContentBody from "./contentBody/ContentBody";
import ContentActions from "./contentActions/ContentActions";
import style from "./Content.module.css";
import { useAppSelector } from "../../hooks/selectorHook";
import ContentHeader from "./contentHeader/ContentHeader";

const Content: React.FC = () => {
  const props = useAppSelector((state) => state.products);
  const totalProductCount = props.products.length;
  return (
    <>
      <div className={style.contentContainer}>
        <ContentHeader totalProductCount={totalProductCount} />
        <ContentActions />
        <ContentBody {...props} />
      </div>
    </>
  );
};

export default Content;
