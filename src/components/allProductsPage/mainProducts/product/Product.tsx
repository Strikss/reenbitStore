import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import s from "./Product.module.css";
import blackStar from "../../../../generalStuff/Products/blackStar.svg";
import whiteStar from "../../../../generalStuff/Products/whiteStar.svg";
import { RouteNames } from "../../../router";
import { NavLink } from "react-router-dom";

const Product: FC = () => {
  const { fetchProducts } = useAction();
  const { fruits, filterName } = useAppSelector((state) => state.products);
  useEffect(() => {
    fetchProducts();
  }, []);
  const stars = Array(5).fill(0);
  return (
    <div>
      {fruits
        .filter((prod) => {
          if (filterName === "") {
            return prod;
          } else if (
            prod.itemName.toLowerCase().includes(filterName.toLowerCase())
          ) {
            return prod;
          }
        })
        .map((fruit) => (
          <div className={s.container} key={fruit.itemID}>
            <div className={s.imgBx}>image</div>
            <div className={s.details}>
              <div className={s.left}>
                <div className={s.top}>
                  <h1>{fruit.itemName}</h1>
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
                <div className={s.bottom}>
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
              <div className={s.right}>
                <div>{fruit.itemPriceHalf}</div>
                <div>{fruit.itemPriceFull}</div>
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
