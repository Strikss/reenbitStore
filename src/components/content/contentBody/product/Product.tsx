import { useEffect } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import style from "./Product.module.css";
import blackStar from "../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { RouteNames } from "../../../../router/router";
import { NavLink } from "react-router-dom";
import filteredProduct from "./cleanProduct";
import productArrow from "../../../../assets/images/productArrow.svg";
import heart from "../../../../assets/images/heart.svg";
import { ProductsType } from "../../../../interfaces/product";

interface Props {
  prod: ProductsType;
}
const Product = ({ prod }: Props) => {
  const stars = Array(5).fill(0);

  return (
    <>
      <div className={style.container} key={prod.itemID}>
        <div className={style.imgBx}>
          <img
            className={style.productImage}
            src={prod.image}
            alt="Product Image"
          />
        </div>
        <div className={style.content}>
          <div className={style.leftSide}>
            <div className={style.leftTopPart}>
              <h1 className={style.title}>{prod.name}</h1>
              <p className={style.description}>{prod.description}</p>
              <ul className={style.starContainer}>
                {stars.map((_, index) => (
                  <li>
                    <img
                      className={style.star}
                      src={prod.rating > index ? blackStar : whiteStar}
                      alt="star"
                      key={index}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className={style.leftBottomPart}>
              <ul className={style.listTitleContainer}>
                <li className={style.listTitle}>Freshness</li>
                <li className={style.listTitle}>Farm</li>
                <li className={style.listTitle}>Delivery</li>
                <li className={style.listTitle}>Stock</li>
              </ul>
              <ul className={style.listDescriptionContainer}>
                <li className={style.listTitle}>{prod.freshness}</li>
                <li className={style.listTitle}>{prod.farm}</li>
                <li className={style.listTitle}>{prod.delivery}</li>
                <li className={style.listTitle}>{prod.stock}</li>
              </ul>
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.pricesContainer}>
              <h1 className={style.discountPrice}>
                {prod.priceHalf.toFixed(2)} <span>USD</span>
              </h1>
              <p className={style.fullPrice}>
                <s>{prod.priceFull.toFixed(2)}</s>
              </p>
            </div>
            <div className={style.transfer}>
              <p className={style.shipping}>Free Shipping</p>
              <p className={style.delivery}>Delivery in 1 day</p>
            </div>
            <div className={style.buttons}>
              <NavLink to={RouteNames.PRODUCT_DESCRIPTION}>
                <button className={style.button}>
                  Product Detail <img src={productArrow} alt="arrow" />
                </button>
              </NavLink>
              <div className={style.wishList}>
                <img src={heart} alt="heart" /> <span> Add to wish list</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
