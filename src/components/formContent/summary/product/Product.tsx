import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import yellowStar from "../../../../assets/images/yellowStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { ProdInf } from "../../../../interfaces/product";
import heart from "../../../../assets/images/redHeart.svg";
import remove from "../../../../assets/images/x.svg";
import { useAction } from "../../../../hooks/useAction";
import AmountButton from "../../../custom/buttons/amountButton/AmountButton";

interface Props {
  product: ProdInf;
}

const Product: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { removeProduct, changeAmount } = useAction();
  const [typeValue, setTypeValue] = useState(product.type);
  const [amountValue, setAmountValue] = useState(product.amount);

  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, i) => (
    <li key={i}>
      <img
        className={style.star}
        src={product!.product.rating > i ? yellowStar : whiteStar}
        alt="star"
      />
    </li>
  ));
  useEffect(() => {
    changeAmount({
      product: product.product,
      type: typeValue,
      amount: amountValue,
    });
  }, [typeValue, amountValue]);
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={product.product.image} alt="product" />
        <div className={style.wishList}>
          <img src={heart} alt="heart" /> <span>Wishlist</span>
        </div>
        <div
          className={style.deleteImg}
          onClick={() => removeProduct(product.product.itemID)}
        >
          <img src={remove} alt="delete" />
          <span>Remove</span>
        </div>
      </div>
      <div className={style.contentContainer}>
        <h2 className={style.title}>{product.product.name}</h2>
        <ul className={style.valuesContainer}>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Farm:</span>
            <span className={style.listTitle}>{product.product.farm}</span>
          </li>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Freshness:</span>
            <span className={style.listTitle}>{product.product.freshness}</span>
          </li>
        </ul>
        <ul className={style.starContainer}>{stars}</ul>
        <div className={style.priceContainer}>
          <h2 className={style.price}>
            {(product.product.priceHalf * amountValue).toFixed(2)}{" "}
            <span>USD</span>
          </h2>
          <AmountButton
            buyBy={product.product.buyBy}
            setTypeValue={setTypeValue}
            setAmountValue={setAmountValue}
            value={product.amount}
            currentType={product.type}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
