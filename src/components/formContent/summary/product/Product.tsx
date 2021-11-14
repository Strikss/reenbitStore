import React from "react";
import style from "./Product.module.css";
import yellowStar from "../../../../assets/images/yellowStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { ProductsType } from "../../../../interfaces/product";
import heart from "../../../../assets/images/redHeart.svg";
import x from "../../../../assets/images/x.svg";
import { useAction } from "../../../../hooks/useAction";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  const { removeProduct } = useAction();

  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, index) => (
    <li key={index}>
      <img
        className={style.star}
        src={product!.rating > index ? yellowStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={product.image} alt="product" />
        <div className={style.wishList}>
          <img src={heart} alt="heart" /> <span>Wishlist</span>
        </div>
        <div className={style.deleteImg} onClick={() => removeProduct(product)}>
          <img src={x} alt="delete" onClick={() => removeProduct(product)} />{" "}
          <span>Remove</span>
        </div>
      </div>
      <div className={style.contentContainer}>
        <h2 className={style.title}>{product.name}</h2>
        <ul className={style.valuesContainer}>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Farm:</span>
            <span className={style.listTitle}>{product.farm}</span>
          </li>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Freshness:</span>
            <span className={style.listTitle}>{product.freshness}</span>
          </li>
        </ul>
        <ul className={style.starContainer}>{stars}</ul>
        <div className={style.priceContainer}>
          <h2 className={style.price}>
            {product.priceHalf.toFixed(2)} <span>USD</span>
          </h2>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
