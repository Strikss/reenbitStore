import React from "react";
import ContentBody from "./contentBody/ContentBody";
import ContentActions from "./contentActions/ContentActions";
import style from "./Content.module.css";
import { useAppSelector } from "../../hooks/selectorHook";
import ContentHeader from "./contentHeader/ContentHeader";
import Paging from "./pagination/Paging";
import { useAction } from "../../hooks/useAction";

const Content: React.FC = () => {
  const props = useAppSelector((state) => state.products);
  const { setCurrentPage } = useAction();
  const totalProductCount = props.products.length;
  return (
    <>
      <div className={style.contentContainer}>
        <ContentHeader totalProductCount={totalProductCount} />
        <ContentActions />
        <ContentBody {...props} />
        <Paging {...props} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default Content;
