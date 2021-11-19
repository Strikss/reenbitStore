import React from "react";
import style from "./BuyButton.module.css";
import { NavLink } from "react-router-dom";
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
  switch (type) {
    case "detail": {
      return (
        <button className={`${style.button} ${style.buttonDetail}`}>
          <NavLink to={RouteNames.PRODUCT_DESCRIPTION + `/${productId}`}>
            Product Detail <img src={productArrow} alt="arrow" />
          </NavLink>
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
        <NavLink to={RouteNames.SHOPPING_CART}>
          <button
            className={`${style.button} ${style.buyBigButton}`}
            onClick={buyProduct}
          >
            <span className={style.plus}>+</span>
            Add to cart
          </button>
        </NavLink>
      );
    }
    case "buySmall": {
      return (
        <button
          className={`${style.button} ${style.buySmallButton}`}
          onClick={buyProduct}
        >
          <NavLink to={RouteNames.SHOPPING_CART}>Buy now</NavLink>
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
