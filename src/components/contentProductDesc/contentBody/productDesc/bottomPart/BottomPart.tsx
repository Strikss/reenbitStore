import React from "react";
import style from "./BottomPart.module.css";

const BottomPart: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Description</h1>
        <h1 className={style.title}>Reviews</h1>
        <h1 className={style.title}>Questions</h1>
      </div>
      <div className={style.descContainer}>
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
    </div>
  );
};

export default BottomPart;
