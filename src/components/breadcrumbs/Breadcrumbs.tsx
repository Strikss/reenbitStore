import React from "react";
import style from "./Breadcrumbs.module.css";

const Breadcrumbs: React.FC = () => {
  return (
    <div className={style.container}>
      <span>HomePage /</span>
      <span className={style.current}>All products</span>
    </div>
  );
};

export default Breadcrumbs;
