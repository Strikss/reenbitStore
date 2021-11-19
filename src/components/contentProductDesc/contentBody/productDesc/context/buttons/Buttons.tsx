import { Progress } from "antd";
import React from "react";
import style from "./Buttons.module.css";
import { ProductsType } from "../../../../../../interfaces/product";
import { useAction } from "../../../../../../hooks/useAction";
import { useAppSelector } from "../../../../../../hooks/selectorHook";
import BuyButton from "../../../../../custom/buttons/buyButton/BuyButton";
import AmountButton from "../../../../../custom/buttons/amountButton/AmountButton";

interface Props {
  product: ProductsType;
}

const Buttons: React.FC<Props> = ({ product }) => {
  //HOOKS
  const boughtProducts: ProductsType[] = useAppSelector(
    (state) => state.products.boughtProducts
  );
  const { buyProduct } = useAction();

  //PRODUCT IN THE BASKET
  const success = boughtProducts.some((prod) => prod.itemID === product.itemID);

  return success ? (
    <div className={style.success}>
      <Progress type="circle" percent={100} width={50} />
      <span className={style.successText}>In the basket</span>
    </div>
  ) : (
    <div className={style.btnContainer}>
      <AmountButton />
      <BuyButton type="buyBig" buyProduct={() => buyProduct(product)} />
    </div>
  );
};

export default Buttons;
