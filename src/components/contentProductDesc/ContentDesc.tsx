import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAction } from "../../hooks/useAction";
import ContentBody from "./contentBody/ContentBody";
import style from "./ContentDesc.module.css";
import ContentFooter from "./contentFooter/ContentFooter";

const ContentDesc: React.FC = () => {
  //hooks
  const { id } = useParams<{ id: string }>();
  const { setCurrentID } = useAction();
  useEffect(() => {
    setCurrentID(id);
  }, [id]);

  return (
    <div className={style.container}>
      <ContentBody />
      <ContentFooter />
    </div>
  );
};

export default ContentDesc;
