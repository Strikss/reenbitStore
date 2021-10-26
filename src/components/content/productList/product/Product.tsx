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
                <div className={style.description}>{prod.description}</div>
                <div className={style.starContainer}>
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
                </div>
              </div>

              <ul className={style.leftBottomPart}>
                <li className={style.charactContainer}>
                  <span className={style.textTitle}>Freshness</span>
                  <span>{prod.freshness}</span>
                </li>
                <li className={style.charactContainer}>
                  <span className={style.textTitle}> Farm</span>
                  <span>{prod.farm}</span>
                </li>
                <li className={style.charactContainer}>
                  <span className={style.textTitle}>Delivery</span>
                  <span>{prod.delivery}</span>
                </li>
                <li className={style.charactContainer}>
                  <span className={style.textTitle}>Stock</span>
                  <span className={style.supply}>{prod.stock} pcs</span>
                </li>
              </ul>
            </div>
            <div className={style.rightSide}>
              <div className={style.prices}>
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
      ))}
    </>
  );
};

export default Product;
