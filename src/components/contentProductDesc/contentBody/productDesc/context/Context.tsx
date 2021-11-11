import React from "react";
import style from "./Context.module.css";
import blackStar from "../../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../../assets/images/whiteRatingStar.svg";
import Buttons from "./buttons/Buttons";

const Context: React.FC = () => {
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
      <ul className={style.valuesContainer}>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Country:</span>
          <span className={style.listTitle}>7776</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Category:</span>
          <span className={style.listTitle}>vegetables</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Stock:</span>
          <span className={style.listTitle}>in Stock</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Color:</span>
          <span className={style.listTitle}>White blue</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Size:</span>
          <span className={style.listTitle}>all sizes</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Buy by:</span>
          <span className={style.listTitle}>pcs,kgs,box,pack</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Delivery:</span>
          <span className={style.listTitle}>in 2 days</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Delivery area:</span>
          <span className={style.listTitle}>Czech republic</span>
        </li>
      </ul>
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

export default Context;
