import React, { useEffect } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import style from "./Product.module.css";
import blackStar from "../../../../assets/images/blackStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { RouteNames } from "../../../../router/router";
import { NavLink } from "react-router-dom";
import filteredProduct from "./filteredProduct";
import productArrow from "../../../../assets/images/productArrow.svg";
import heart from "../../../../assets/images/heart.svg";

const Product: React.FC = () => {
  const { products, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );
  const { fetchProducts } = useAction();
  useEffect(() => {
    fetchProducts();
  }, []);
  const stars = Array(5).fill(0);

  return (
    <>
      {filteredProduct(products, filterName, filterStars).map((prod) => (
        <div className={style.container} key={prod.itemID}>
          <div className={style.imgBx}></div>
          <div className={style.content}>
            <ul className={style.leftSide}>
              <ul className={style.leftTopPart}>
                <h1 className={style.title}>{prod.name}</h1>
                <li className={style.description}>{prod.description}</li>
                <li>
                  {stars.map((_, index) =>
                    prod.rating > index ? (
                      <img
                        className={style.star}
                        src={blackStar}
                        alt="star"
                        key={index}
                      />
                    ) : (
                      <img
                        className={style.star}
                        src={whiteStar}
                        alt="star"
                        key={index}
                      />
                    )
                  )}
                </li>
              </ul>

              <ul className={style.leftBottomPart}>
                <li>
                  <span className={style.textTitle}>Freshness</span>
                  <span>{prod.freshness}</span>
                </li>
                <li>
                  <span className={style.textTitle}> Farm</span>
                  <span>{prod.farm}</span>
                </li>
                <li>
                  <span className={style.textTitle}>Delivery</span>
                  <span>{prod.delivery}</span>
                </li>
                <li>
                  <span className={style.textTitle}>Stock</span>
                  <span className={style.supply}>{prod.stock} pcs</span>
                </li>
              </ul>
            </ul>
            <ul className={style.rightSide}>
              <ul className={style.prices}>
                <h1 className={style.discountPrice}>
                  {prod.priceHalf.toFixed(2)} USD
                </h1>
                <li className={style.fullPrice}>{prod.priceFull.toFixed(2)}</li>
              </ul>
              <ul className={style.transfer}>
                <li className={style.shipping}>Free Shipping</li>
                <li>Delivery in 1 day</li>
              </ul>
              <ul className={style.buttons}>
                <li>
                  <NavLink to={RouteNames.PRODUCT_DESCRIPTION}>
                    <button className={style.button}>
                      Product Detail <img src={productArrow} alt="arrow" />
                    </button>
                  </NavLink>
                </li>

                <li className={style.wishList}>
                  <img src={heart} alt="heart" /> Add to wish list
                </li>
              </ul>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
