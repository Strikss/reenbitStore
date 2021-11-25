import { Progress } from "antd";
import React, { useEffect, useState } from "react";
import style from "./Buttons.module.css";
import { ProdInf, ProductsType } from "../../../../../../interfaces/product";
import { useAction } from "../../../../../../hooks/useAction";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../../../../../../router/router";
import { useAppSelector } from "../../../../../../hooks/selectorHook";
import BuyButton from "../../../../../custom/buttons/buyButton/BuyButton";
import AmountButton from "../../../../../custom/buttons/amountButton/AmountButton";
import { setLocalStorage } from "../../../../../../helpers/setLocalStorage/setLocalStorage";

interface Props {
  product: ProductsType;
}

const Buttons: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { boughtProducts } = useAppSelector((state) => state.products);
  const [typeValue, setTypeValue] = useState<ProdInf["type"]>(product.buyBy[0]);
  const [amountValue, setAmountValue] = useState(1);
  const [prodInf, setProdInf] = useState<ProdInf>({
    product: product,
    amount: amountValue,
    type: typeValue,
  });
  const { buyProduct } = useAction();
  const history = useHistory();

  //PRODUCT IN THE BASKET
  const success = boughtProducts.some(
    (prod) => prod.product.itemID === product.itemID
  );

  //FUNCTIONS
  useEffect(() => {
    setProdInf({ product: product, type: typeValue, amount: amountValue });
  }, [amountValue, typeValue]);

  const handleClick = () => {
    setLocalStorage(prodInf, boughtProducts.length);
    buyProduct(prodInf);
    history.push(RouteNames.SHOPPING_CART);
  };
  return success ? (
    <div className={style.success}>
      <Progress type="circle" percent={100} width={50} />
      <span className={style.successText}>In the basket</span>
    </div>
  ) : (
    <div className={style.btnContainer}>
      <AmountButton
        buyBy={product.buyBy}
        setTypeValue={setTypeValue}
        setAmountValue={setAmountValue}
        value={amountValue}
        max={product.stock}
      />
      <BuyButton
        type="buyBig"
        handleClick={handleClick}
        text="Add to cart"
        prefix="+"
        disabled={amountValue <= 0 || amountValue > product.stock}
      />
    </div>
  );
};

export default Buttons;
