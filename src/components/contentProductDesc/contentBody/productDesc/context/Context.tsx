import React from "react";
import style from "./Context.module.css";
import blackStar from "../../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../../assets/images/whiteRatingStar.svg";
import Buttons from "./buttons/Buttons";
import heart from "../../../../../assets/images/heart.svg";
import { ProductsType } from "../../../../../interfaces/product";

interface Props {
  product: ProductsType;
}

const Context: React.FC<Props> = ({ product }) => {
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
      <h1 className={style.header}>{product?.name}</h1>
      <div className={style.ratingContainer}>
        <ul className={style.starContainer}>{stars}</ul>
        <span className={style.review}>
          ({product.reviews} customer reviews)
        </span>
      </div>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quas at
        soluta aspernatur rem eligendi, hic nostrum voluptas ipsam ex sint,
        nesciunt porro itaque natus quisquam ratione eveniet molestias
        obcaecati.
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
            <li className={style.listTitle}>{product?.country}</li>
            <li className={style.listTitle}>{product?.category}</li>
            <li className={style.listTitle}>{`${product?.stock} pcs`}</li>
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
            <li className={style.listTitle}>pcs, kgs, box, pack</li>
            <li className={style.listTitle}>
              {product.deliverIn > 1
                ? `in ${product?.deliverIn} days`
                : `in ${product?.deliverIn} day`}
            </li>
            <li className={style.listTitle}>{product?.delivery}</li>
          </ul>
        </div>
      </div>
      <div className={style.buyContainer}>
        <div>
          <h1 className={style.priceHalf}>
            {product?.priceHalf.toFixed(2)} <span> USD</span>
          </h1>
          <p className={style.priceFull}>
            <s>
              {product?.priceFull.toFixed(2)} <span>USD</span>
            </s>
          </p>
        </div>
        <Buttons />
      </div>
      <div className={style.wishList}>
        <img src={heart} alt="heart" /> <span> Add to my wish list</span>
      </div>
    </div>
  );
};

export default Context;
