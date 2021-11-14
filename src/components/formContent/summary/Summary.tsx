import React from "react";
import { useAppSelector } from "../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./Summary.module.css";

const Summary: React.FC = () => {
  //HOOKS
  const products = useAppSelector((state) => state.products.boughtProducts);

  const boughtProducts = products.map((prod) => (
    <li className={style.product}>
      <Product product={prod} />
    </li>
  ));

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.title}>Order Summary</h1>
        <p className={style.subtitle}>
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
      <ul className={style.productsContainer}>{boughtProducts}</ul>
      <div className={style.subTotal}>
        <h3>Subtotal</h3>
        <span>73.98</span>
      </div>
      <div className={style.tax}>
        <h3>Tax</h3>
        <span>17%</span>
      </div>
      <div className={style.inputContainer}>
        <input type="text" />
      </div>
      <div className={style.priceContainer}>
        <div>
          <h3>total order</h3>
          <p>guaranteed</p>
        </div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Summary;
