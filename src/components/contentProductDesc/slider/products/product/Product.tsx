import { Progress } from "antd";
import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { setLocalStorage } from "../../../../../helpers/setLocalStorage/setLocalStorage";
import { toFixed } from "../../../../../helpers/toFixed/toFixed";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import { useAction } from "../../../../../hooks/useAction";
import { ProdInf, ProductsType } from "../../../../../interfaces/product";
import { RouteNames } from "../../../../../router/router";
import BuyButton from "../../../../custom/buttons/buyButton/BuyButton";
import style from "./Product.module.css";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { buyProduct } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);
  const history = useHistory();

  //PRODUCT
  const prodInf = {
    product,
    amount: 1,
    type: product.buyBy[0] as ProdInf["type"],
  };

  //DISCOUNT
  const discount = 100 - (product.priceHalf / product.priceFull) * 100;

  //SUCCESS
  const success = boughtProducts.some(
    (prod) => prod.product.itemID === product.itemID
  );

  //FUNCTIONS
  const handleClick = () => {
    setLocalStorage(prodInf, boughtProducts.length);
    buyProduct(prodInf);
    history.push(RouteNames.SHOPPING_CART);
  };

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
            <h1 className={style.priceHalf}>{toFixed(product.priceHalf)}</h1>
            <p className={style.priceFull}>
              <s>{toFixed(product.priceFull)}</s>
            </p>
          </div>
          {success ? (
            <Progress type="circle" percent={100} width={30} />
          ) : (
            <BuyButton
              type="buySmall"
              handleClick={handleClick}
              text="Buy now"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
