import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import yellowStar from "../../../../assets/images/yellowStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { ProdInf } from "../../../../interfaces/product";
import heart from "../../../../assets/images/redHeart.svg";
import remove from "../../../../assets/images/x.svg";
import { useAction } from "../../../../hooks/useAction";
import AmountButton from "../../../custom/buttons/amountButton/AmountButton";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../../router/router";
import { toFixed } from "../../../../helpers/toFixed/toFixed";
import { setLocalStorage } from "../../../../helpers/setLocalStorage/setLocalStorage";
import { useAppSelector } from "../../../../hooks/selectorHook";

interface Props {
  product: ProdInf;
}

const Product: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { removeProduct, changeAmount } = useAction();
  const [typeValue, setTypeValue] = useState(product.type);
  const [amountValue, setAmountValue] = useState(product.amount);
  const { boughtProducts } = useAppSelector((state) => state.products);

  const prodInf = {
    product: product.product,
    type: typeValue,
    amount: amountValue,
  };

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

  //FUNCTIONS
  const cleanLocalStorage = (id: string) => {
    const productList: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    const newProductList = productList.filter(
      (product) => product.product.itemID !== id
    );
    localStorage.setItem("products", JSON.stringify(newProductList));
  };

  useEffect(() => {
    changeAmount(prodInf);
    setLocalStorage(prodInf, boughtProducts.length, true);
  }, [typeValue, amountValue]);

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <NavLink
          to={RouteNames.PRODUCT_DESCRIPTION + `/${product.product.itemID}`}
        >
          <img
            className={style.img}
            src={product.product.image}
            alt="product"
          />
        </NavLink>
        <div className={style.wishList}>
          <img src={heart} alt="heart" /> <span>Wishlist</span>
        </div>
        <div
          className={style.deleteImg}
          onClick={() => {
            removeProduct(product.product.itemID);
            cleanLocalStorage(product.product.itemID);
          }}
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
            {toFixed(product.product.priceHalf * amountValue)}
          </h2>
          <AmountButton
            buyBy={product.product.buyBy}
            setTypeValue={setTypeValue}
            setAmountValue={setAmountValue}
            value={product.amount}
            currentType={product.type}
            max={product.product.stock}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
