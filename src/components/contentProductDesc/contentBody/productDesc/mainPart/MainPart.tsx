import React from "react";
import style from "./MainPart.module.css";
import blackStar from "../../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../../assets/images/whiteRatingStar.svg";

const MainPart: React.FC = () => {
  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, index) => (
    <li key={index}>
      <img
        className={style.star}
        src={5 > index ? blackStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  return (
    <div className={style.container}>
      <h1>Header here</h1>
      <div className={style.ratingContainer}>
        <ul className={style.starContainer}>{stars}</ul>
        <span>(1 customer review)</span>
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
        voluptatum eos aut maxime odit illo voluptate aspernatur deserunt?
        Consectetur, nam beatae nesciunt accusamus exercitationem soluta
        quibusdam ea alias tenetur doloremque?
      </p>
      <div className={style.valuesContainer}>
        <div className={style.left}>
          <ul className={style.listTitleContainer}>
            <li className={style.listTitle}>Country:</li>
            <li className={style.listTitle}>Category:</li>
            <li className={style.listTitle}>Stock:</li>
            <li className={style.listTitle}>Color:</li>
          </ul>
          <ul className={style.listDescriptionContainer}>
            <li className={style.listTitle}>7776</li>
            <li className={style.listTitle}>vegetables</li>
            <li className={style.listTitle}>in Stock</li>
            <li className={style.listTitle}>White blue</li>
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
            <s>48.56</s>
          </p>
        </div>
        <span>Button pcs</span>
        <button className={style.button}>
          <span className={style.plus}>+</span>Add to cart
        </button>
      </div>
    </div>
  );
};

export default MainPart;
