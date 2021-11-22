import React from "react";
import style from "./BuyButton.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { RouteNames } from "../../../../router/router";
import productArrow from "../../../../assets/images/productArrow.svg";

interface Props {
  productId?: string;
  type: "detail" | "pagination" | "buyBig" | "buySmall" | "completeOrder";
  setProductPortion?: () => void;
  buyProduct?: () => void;
}

const BuyButton: React.FC<Props> = ({
  productId,
  type,
  setProductPortion,
  buyProduct,
}) => {
  //HOOKS
  const history = useHistory();

  switch (type) {
    case "detail": {
      return (
        <button
          className={`${style.button} ${style.buttonDetail}`}
          onClick={() =>
            history.push(RouteNames.PRODUCT_DESCRIPTION + `/${productId}`)
          }
        >
          Product Detail{" "}
          <img className={style.detailArrow} src={productArrow} alt="arrow" />
        </button>
      );
    }
    case "pagination": {
      return (
        <button
          className={`${style.button} ${style.paginationButton}`}
          onClick={() => setProductPortion!()}
        >
          Show more products
          <img className={style.arrow} src={productArrow} alt="arrow" />
        </button>
      );
    }
    case "buyBig": {
      return (
        <button
          className={`${style.button} ${style.buyBigButton}`}
          onClick={() => {
            buyProduct!();
            history.push(RouteNames.SHOPPING_CART);
          }}
        >
          <span className={style.plus}>+</span>
          Add to cart
        </button>
      );
    }
    case "buySmall": {
      return (
        <button
          className={`${style.button} ${style.buySmallButton}`}
          onClick={() => {
            buyProduct!();
            history.push(RouteNames.SHOPPING_CART);
          }}
        >
          Buy now
        </button>
      );
    }
    case "completeOrder": {
      return (
        <button className={`${style.button} ${style.completeOrderButton}`}>
          Complete order
        </button>
      );
    }
    default:
      return <div>No button</div>;
  }
};

export default BuyButton;
