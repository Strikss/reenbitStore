import React from "react";
import style from "./DescriptionTab.module.css";

const DescriptionTab: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.upperContainer}>
        <h1 className={style.descTitle}>Origins</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque quas minima quidem ratione voluptatibus atque est architecto
        </p>
      </div>
      <div className={style.lowerContainer}>
        <h1 className={style.descTitle}>How to cook</h1>
        <p className={style.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        </p>
      </div>
    </div>
  );
};

export default DescriptionTab;
