import { Progress } from "antd";
import React from "react";
import style from "./Buttons.module.css";
import { ProductsType } from "../../../../../../interfaces/product";
import { useAction } from "../../../../../../hooks/useAction";
import { useAppSelector } from "../../../../../../hooks/selectorHook";
import BuyButton from "../../../../../custom/buttons/buyButton/BuyButton";
import AmountButton from "../../../../../custom/buttons/amountButton/AmountButton";
import { RouteNames } from "../../../../../../router/router";
import { useHistory } from "react-router";

interface Props {
  product: ProductsType;
}

const Buttons: React.FC<Props> = ({ product }) => {
  //HOOKS
  const boughtProducts: ProductsType[] = useAppSelector(
    (state) => state.products.boughtProducts
  );
  const { buyProduct } = useAction();
  const history = useHistory();

  //PRODUCT IN THE BASKET
  const success = boughtProducts.some((prod) => prod.itemID === product.itemID);

  //FUNCTIONS
  const handleClick = () => {
    buyProduct(product);
    history.push(RouteNames.SHOPPING_CART);
  };
  return success ? (
    <div className={style.success}>
      <Progress type="circle" percent={100} width={50} />
      <span className={style.successText}>In the basket</span>
    </div>
  ) : (
    <div className={style.btnContainer}>
      <AmountButton buyBy={product.buyBy} />
      <BuyButton
        type="buyBig"
        handleClick={handleClick}
        text="Add to cart"
        prefix="+"
      />
    </div>
  );
};

export default Buttons;
