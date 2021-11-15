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
      <ul className={style.valuesContainer}>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Country:</span>
          <span className={style.listTitle}>{product.country}</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Size:</span>
          <span className={style.listTitle}>all sizes</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Category:</span>
          <span className={style.listTitle}>{product.category}</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Buy by:</span>
          <span className={style.listTitle}>pcs,kgs,box,pack</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Stock:</span>
          <span className={style.listTitle}>{`${product?.stock} pcs`}</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Delivery:</span>
          <span className={style.listTitle}>
            {product.deliverIn > 1
              ? `in ${product?.deliverIn} days`
              : `in ${product?.deliverIn} day`}
          </span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Color:</span>
          <span className={style.listTitle}>{product.color}</span>
        </li>
        <li className={style.listContainer}>
          <span className={style.listTitle}>Delivery area:</span>
          <span className={style.listTitle}>{product.delivery}</span>
        </li>
      </ul>
      <div className={style.buyContainer}>
        <div className={style.priceContainer}>
          <h1 className={style.priceHalf}>
            {product?.priceHalf.toFixed(2)} <span> USD</span>
          </h1>
          <p className={style.priceFull}>
            <s>
              {product?.priceFull.toFixed(2)} <span>USD</span>
            </s>
          </p>
        </div>
        <Buttons product={product} />
      </div>
      <div className={style.wishList}>
        <img src={heart} alt="heart" /> <span> Add to my wish list</span>
      </div>
    </div>
  );
};

export default Context;
