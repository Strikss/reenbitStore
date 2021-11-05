import React from "react";
import style from "./BottomPart.module.css";
import heart from "../../../../../assets/images/heart.svg";
import { ProductsType } from "../../../../../interfaces/product";

interface Props {
  product: ProductsType | undefined;
}

const BottomPart: React.FC<Props> = ({ product }) => {
  return (
    <div className={style.container}>
      <div className={style.wishList}>
        <img src={heart} alt="heart" /> <span> Add to my wish list</span>
      </div>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Description</h1>
        <h1 className={style.title}>Reviews</h1>
        <h1 className={style.title}>Questions</h1>
      </div>
      <div className={style.descContainer}>
        <div className={style.upperContainer}>
          <h1>Origins</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            cumque quas minima quidem ratione voluptatibus atque est architecto
          </p>
        </div>
        <div className={style.lowerContainer}>
          <h1>How to cook</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomPart;
