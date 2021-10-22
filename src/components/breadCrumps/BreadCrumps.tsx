import React from "react";
import style from "./BreadCrumps.module.css";
const BreadCrumps: React.FC = () => {
  return (
    <div className={style.container}>
      HomePage / <span className={style.current}>All products</span>
    </div>
  );
};

export default BreadCrumps;
