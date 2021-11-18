import { Progress } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import { useAction } from "../../../../../hooks/useAction";
import { ProductsType } from "../../../../../interfaces/product";
import { RouteNames } from "../../../../../router/router";
import style from "./Product.module.css";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { buyProduct } = useAction();
  const boughtProducts = useAppSelector(
    (state) => state.products.boughtProducts
  );

  //DISCOUNT
  const discount = 100 - (product.priceHalf / product.priceFull) * 100;

  //SUCCESS
  const success = boughtProducts.some(
    (prod) => prod.product.itemID === product.itemID
  );

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <NavLink to={RouteNames.PRODUCT_DESCRIPTION + `/${product.itemID}`}>
          {discount && (
            <p className={style.discount}>{`- ${discount.toFixed(0)} %`}</p>
          )}
          <img
            className={style.productImage}
            src={product.image}
            alt="product Image"
          />
        </NavLink>
      </div>
      <div className={style.description}>
        <div className={style.topPart}>
          <h1 className={style.title}>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className={style.bottomPart}>
          <div className={style.priceContainer}>
            <h1 className={style.priceHalf}>
              {product.priceHalf.toFixed(2)} <span>USD</span>
            </h1>
            <p className={style.priceFull}>
              <s>
                {product.priceFull.toFixed(2)} <span>USD</span>
              </s>
            </p>
          </div>
          {success ? (
            <Progress type="circle" percent={100} width={30} />
          ) : (
            <button
              className={style.button}
              onClick={() => buyProduct({ product, amount: 1, type: "Pcs" })}
            >
              <NavLink to={RouteNames.SHOPPING_CART}>Buy now</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
