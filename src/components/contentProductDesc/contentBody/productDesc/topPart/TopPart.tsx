import React from "react";
import style from "./TopPart.module.css";
import blackStar from "../../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../../assets/images/whiteRatingStar.svg";
import Buttons from "./buttons/Buttons";
import { ProductsType } from "../../../../../interfaces/product";

interface Props {
  product: ProductsType | undefined;
}

const TopPart: React.FC<Props> = ({ product }) => {
  //Hooks

  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, index) => (
    <li key={index}>
      <img
        className={style.star}
        src={product!.rating > index ? blackStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  return (
    <div className={style.container}>
      <h1>{product?.name}</h1>
      <div className={style.ratingContainer}>
        <ul className={style.starContainer}>{stars}</ul>
        <span>(1 customer review)</span>
      </div>
      <p>{product?.description}</p>
      <div className={style.valuesContainer}>
        <div className={style.left}>
          <ul className={style.listTitleContainer}>
            <li className={style.listTitle}>Country:</li>
            <li className={style.listTitle}>Category:</li>
            <li className={style.listTitle}>Stock:</li>
            <li className={style.listTitle}>Color:</li>
          </ul>
          <ul className={style.listDescriptionContainer}>
            <li className={style.listTitle}>{product?.country}</li>
            <li className={style.listTitle}>{product?.category}</li>
            <li className={style.listTitle}>{product?.stock}</li>
            <li className={style.listTitle}>{product?.color}</li>
          </ul>
        </div>
        <div className={style.right}>
          <ul className={style.listTitleContainer}>
            <li className={style.listTitle}>Size:</li>
            <li className={style.listTitle}>Buy by:</li>
            <li className={style.listTitle}>Delivery:</li>
            <li className={style.listTitle}>Delivery area:</li>
          </ul>
          <ul className={style.listDescriptionContainer}>
            <li className={style.listTitle}>all sizes</li>
            <li className={style.listTitle}>pcs,kgs,box,pack</li>
            <li className={style.listTitle}>in 2 days</li>
            <li className={style.listTitle}>Czech republic</li>
          </ul>
        </div>
      </div>
      <div className={style.buyContainer}>
        <div>
          <h1>36.23 USD</h1>
          <p>
            <s>48.56 USD</s>
          </p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default TopPart;
