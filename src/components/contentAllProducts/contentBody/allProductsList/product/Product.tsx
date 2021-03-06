import style from "./Product.module.css";
import blackStar from "../../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../../assets/images/whiteRatingStar.svg";
import { RouteNames } from "../../../../../router/router";
import { NavLink, useHistory } from "react-router-dom";
import heart from "../../../../../assets/images/heart.svg";
import { ProductsType } from "../../../../../interfaces/product";
import React from "react";
import productArrow from "../../../../../assets/images/productArrow.svg";
import BuyButton from "../../../../custom/buttons/buyButton/BuyButton";
import { toFixed } from "../../../../../helpers/toFixed/toFixed";

interface Props {
  prod: ProductsType;
}
const Product: React.FC<Props> = ({ prod }) => {
  //HOOKS
  const history = useHistory();

  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, index) => (
    <li key={index}>
      <img
        className={style.star}
        src={prod.rating > index ? blackStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  //FUNCTIONS
  const handleClick = () => {
    history.push(RouteNames.PRODUCT_DESCRIPTION + `/${prod.itemID}`);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.imgBx}>
          <NavLink to={RouteNames.PRODUCT_DESCRIPTION + `/${prod.itemID}`}>
            <img
              className={style.productImage}
              src={prod.image}
              alt="Product Image"
            />
          </NavLink>
        </div>

        <div className={style.content}>
          <div className={style.leftSide}>
            <div className={style.leftTopPart}>
              {/*mobile part title*/}
              <div className={style.mobileTitle}>
                <div>
                  <h1 className={style.title}>{prod.name}</h1>
                </div>
                <div className={style.pricesContainerMobile}>
                  <h1 className={style.discountPrice}>
                    {toFixed(prod.priceHalf)}
                  </h1>
                  <p className={style.fullPrice}>
                    <s>{toFixed(prod.priceFull)}</s>
                  </p>
                </div>
              </div>
              {/*mobile part title end*/}
              <div className={style.mainTitle}>
                <h1 className={style.title}>{prod.name}</h1>
              </div>

              <p className={style.description}>{prod.description}</p>
              <ul className={style.starContainer}>{stars}</ul>
            </div>
            <div className={style.leftBottomPart}>
              <ul className={style.listTitleContainer}>
                <li className={style.listTitle}>Freshness:</li>
                <li className={style.listTitle}>Farm:</li>
                <li className={style.listTitle}>Delivery:</li>
                <li className={style.listTitle}>Stock:</li>
              </ul>
              <ul className={style.listDescriptionContainer}>
                <li className={style.listTitle}>{prod.freshness}</li>
                <li className={style.listTitle}>{prod.farm}</li>
                <li className={style.listTitle}>{prod.delivery}</li>
                <li className={style.listTitle}>
                  <span className={style.supply}>{`${prod.stock} pcs`}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.pricesContainer}>
              <h1 className={style.discountPrice}>{toFixed(prod.priceHalf)}</h1>
              <p className={style.fullPrice}>
                <s>{toFixed(prod.priceFull)}</s>
              </p>
            </div>
            <div className={style.transfer}>
              <p className={style.shipping}>Free Shipping</p>
              <p className={style.delivery}>Delivery in 1 day</p>
            </div>
            <div className={style.buttons}>
              <BuyButton
                type="detail"
                handleClick={handleClick}
                text="Product detail"
                suffix={productArrow}
              />
              <div className={style.wishList}>
                <img src={heart} alt="heart" /> <span>Add to wish list</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
