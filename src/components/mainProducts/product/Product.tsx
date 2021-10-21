import React, { useEffect } from "react";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";
import style from "./Product.module.css";
import blackStar from "../../../assets/images/blackStar.svg";
import whiteStar from "../../../assets/images/whiteStar.svg";
import { RouteNames } from "../../../router/router";
import { NavLink } from "react-router-dom";

const Product: React.FC = () => {
  const { fetchProducts } = useAction();
  const { fruits, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );
  useEffect(() => {
    fetchProducts();
  }, []);
  const stars = Array(5).fill(0);
  return (
    <div>
      {fruits
        .filter((prod) => {
          if (filterName === "" && filterStars.length === 1) {
            return prod;
          } else if (
            prod.name.toLowerCase().includes(filterName.toLowerCase()) &&
            filterStars.includes(prod.rating)
          ) {
            return prod;
          }
        })
        .map((fruit) => (
          <div className={style.container} key={fruit.itemID}>
            <div className={style.imgBx}>image</div>
            <div className={style.details}>
              <div className={style.left}>
                <div className={style.top}>
                  <h1>{fruit.name}</h1>
                  <div>{fruit.description}</div>
                </div>
                <div>
                  {stars.map((_, index) =>
                    fruit.rating > index ? (
                      <img src={blackStar} alt="star" key={index} />
                    ) : (
                      <img src={whiteStar} alt="star" key={index} />
                    )
                  )}
                </div>
                <div className={style.bottom}>
                  <div>
                    Freshness <span>{fruit.freshness}</span>
                  </div>
                  <div>
                    Farm <span>{fruit.farm}</span>
                  </div>
                  <div>
                    Delivery <span>{fruit.delivery}</span>
                  </div>
                  <div>
                    Stock <span>{fruit.stock}</span>
                  </div>
                </div>
              </div>
              <div className={style.right}>
                <div>{fruit.priceHalf}</div>
                <div>{fruit.priceFull}</div>
                <div>Free Shipping</div>
                <div>Delivery in 1 day</div>
                <div>
                  <NavLink to={RouteNames.PRODUCT_DESCRIPTION}>
                    <button>Product Detail</button>
                  </NavLink>
                </div>
                <div>add to wish list</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
