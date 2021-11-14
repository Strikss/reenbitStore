import { Dropdown, Menu, Progress } from "antd";
import React, { useState } from "react";
import style from "./Buttons.module.css";
import arrow from "../../../../../../assets/images/arrow.svg";
import { ProductsType } from "../../../../../../interfaces/product";
import { useAction } from "../../../../../../hooks/useAction";
import { NavLink } from "react-router-dom";
import { RouteNames } from "../../../../../../router/router";
import { useAppSelector } from "../../../../../../hooks/selectorHook";

interface Props {
  product: ProductsType;
}

const Buttons: React.FC<Props> = ({ product }) => {
  //HOOKS
  const boughtProducts: ProductsType[] = useAppSelector(
    (state) => state.products.boughtProducts
  );
  const [amouth, setAmouth] = useState("Pcs");
  const { buyProduct } = useAction();

  //PRODUCT IN THE BASKET
  const success = boughtProducts.some((prod) => prod.itemID === product.itemID);
  //DROPDOWN
  const menu = (
    <Menu>
      <Menu.Item onClick={() => setAmouth("Pcs")}>Pcs</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Kgs")}>Kgs</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Box")}>Box</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Pack")}>Pack</Menu.Item>
    </Menu>
  );

  return success ? (
    <div className={style.success}>
      <Progress type="circle" percent={100} width={50} />
      <span className={style.successText}>In the basket</span>
    </div>
  ) : (
    <div className={style.btnContainer}>
      <div className={style.amouthContainer}>
        <input className={style.left} type="number" placeholder="1" />
        <div className={style.right}>
          <Dropdown arrow overlay={menu} trigger={["click"]}>
            <button className={style.dropButton}>
              <a onClick={(e) => e.preventDefault()}>
                {amouth}
                <img className={style.arrow} src={arrow} alt="arrow" />
              </a>
            </button>
          </Dropdown>
        </div>
      </div>

      <NavLink to={RouteNames.SHOPPING_CART}>
        <button className={style.button} onClick={() => buyProduct(product)}>
          <span className={style.plus}>+</span>
          Add to cart
        </button>
      </NavLink>
    </div>
  );
};

export default Buttons;
