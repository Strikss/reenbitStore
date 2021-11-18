import React from "react";
import { addDays } from "../../../helpers/addDays/addDays";
import { useAppSelector } from "../../../hooks/selectorHook";
import { ProdInf } from "../../../interfaces/product";
import Product from "./product/Product";
import PromoCode from "./promoCode/PromoCode";
import style from "./Summary.module.css";

const Summary: React.FC = () => {
  //HOOKS
  const products = useAppSelector((state) => state.products.boughtProducts);
  const { promoCode, discount } = useAppSelector((state) => state.products);
  //BOUGHT PRODUCTS
  const boughtProducts = products.map((prod, i) => (
    <li className={style.product} key={i}>
      <Product product={prod} />
    </li>
  ));

  //PRICES
  const reducer = (prev: number, curr: ProdInf) =>
    prev + curr.product.priceHalf * curr.amount;
  const productsPrice = products.reduce(reducer, 0);
  const taxPrice = productsPrice * 0.17;
  const discountPrice = productsPrice - productsPrice * (discount / 100);

  //DATE
  const deliveryDay = products.reduce((prev, curr) => {
    return Math.max(prev, curr.product.deliverIn);
  }, 0);
  let currentDate = new Date();
  const deliveryDate = addDays(currentDate, deliveryDay);

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
        <span className={style.price}>{productsPrice.toFixed(2)} USD</span>
      </div>
      <div className={style.taxContainer}>
        <h3>Tax 17%</h3>
        <span className={style.price}>{taxPrice.toFixed(2)} USD</span>
      </div>
      <div className={style.form}>
        <PromoCode
          placeholder="Apply promo code"
          suffixText="Apply now"
          promoCode={promoCode}
          max={10}
          name="promoCode"
          id="summary"
        />
      </div>
      <div className={style.totalOrderContainer}>
        <div className={style.totalOrder}>
          <h3>Total Order</h3>
          <p className={style.delivery}>
            Guaranteed delivery day: {deliveryDate}
          </p>
        </div>
        <div className={style.discountContainer}>
          <h1 className={discount ? style.discount : style.fullPrice}>
            {(productsPrice + taxPrice).toFixed(2)} USD
          </h1>
          {discount ? (
            <h1 className={style.fullPrice}>
              {(discountPrice + taxPrice).toFixed(2)} USD
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Summary;
