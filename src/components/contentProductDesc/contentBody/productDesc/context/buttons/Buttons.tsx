import { Dropdown, Menu, Progress } from "antd";
import React, { useEffect, useState } from "react";
import style from "./Buttons.module.css";
import arrow from "../../../../../../assets/images/arrow.svg";
import { ProdInf, ProductsType } from "../../../../../../interfaces/product";
import { useAction } from "../../../../../../hooks/useAction";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../../../../router/router";
import { useAppSelector } from "../../../../../../hooks/selectorHook";

interface Props {
  product: ProductsType;
}

const Buttons: React.FC<Props> = ({ product }) => {
  //HOOKS
  const boughtProducts: ProdInf[] = useAppSelector(
    (state) => state.products.boughtProducts
  );
  const [type, setType] = useState("Pcs");
  const [amount, setAmount] = useState(1);
  const [prodInf, setProdInf] = useState<ProdInf>({
    product: product,
    amount: amount,
    type: type as any,
  });
  const { buyProduct } = useAction();

  //PRODUCT IN THE BASKET
  const success = boughtProducts.some(
    (prod) => prod.product.itemID === product.itemID
  );

  //DROPDOWN
  const menu = (
    <Menu>
      <Menu.Item key="Pcs" onClick={() => setType("Pcs")}>
        Pcs
      </Menu.Item>
      <Menu.Item key="Kgs" onClick={() => setType("Kgs")}>
        Kgs
      </Menu.Item>
      <Menu.Item key="Box" onClick={() => setType("Box")}>
        Box
      </Menu.Item>
      <Menu.Item key="Pack" onClick={() => setType("Pack")}>
        Pack
      </Menu.Item>
    </Menu>
  );

  //FUNCTIONS
  useEffect(() => {
    setProdInf({ product: product, amount: amount, type: type as any });
  }, [type, amount]);

  return success ? (
    <div className={style.success}>
      <Progress type="circle" percent={100} width={50} />
      <span className={style.successText}>In the basket</span>
    </div>
  ) : (
    <div className={style.btnContainer}>
      <div className={style.amouthContainer}>
        <input
          className={style.left}
          type="number"
          placeholder="1"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className={style.right}>
          <Dropdown arrow overlay={menu} trigger={["click"]}>
            <button className={style.dropButton}>
              <a onClick={(e) => e.preventDefault()}>
                {type}
                <img className={style.arrow} src={arrow} alt="arrow" />
              </a>
            </button>
          </Dropdown>
        </div>
      </div>

      <NavLink to={RouteNames.SHOPPING_CART}>
        <button className={style.button} onClick={() => buyProduct(prodInf)}>
          <span className={style.plus}>+</span>
          Add to cart
        </button>
      </NavLink>
    </div>
  );
};

export default Buttons;
