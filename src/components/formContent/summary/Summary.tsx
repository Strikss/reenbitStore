import React from "react";
import { addDays } from "../../../helpers/addDays/addDays";
import { useAppSelector } from "../../../hooks/selectorHook";
import { ProductsType } from "../../../interfaces/product";
import CustomFormField from "../../custom/customFormField/CustomFormField";
import Product from "./product/Product";
import style from "./Summary.module.css";
import emptyBox from "../../../assets/images/empty_box.svg";

const Summary: React.FC = () => {
  //HOOKS
  const products = useAppSelector((state) => state.products.boughtProducts);

  //BOUGHT PRODUCTS
  const boughtProducts =
    products.length === 0 ? (
      <a href="#" className={style.blockContainer}>
        <img src={emptyBox} alt="empty box" className={style.imgContainer} />
        <p className={style.emptyBox}>
          The basket is empty, please click here to redirect to main page
        </p>
      </a>
    ) : (
      products.map((prod, i) => (
        <li className={style.product} key={i}>
          <Product product={prod} />
        </li>
      ))
    );

  //PRICES
  const reducer = (prev: number, curr: ProductsType) => prev + curr.priceHalf;
  const totalPrice: number = products.reduce(reducer, 0);
  const taxPrice = totalPrice * 0.17;

  //DATE
  const deliveryDay = products.reduce((prev, curr) => {
    return Math.max(prev, curr.deliverIn);
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
        <span className={style.innerTitle}>Subtotal</span>
        <span className={style.price}>{totalPrice.toFixed(2)} USD</span>
      </div>
      <div className={style.taxContainer}>
        <span className={style.innerTitle}>Tax 17%</span>
        <span className={style.price}>{taxPrice.toFixed(2)} USD</span>
      </div>
      <div className={style.form}>
        <CustomFormField
          placeholder="Apply promo code"
          suffixText="Apply now"
        />
      </div>
      <div className={style.totalOrderContainer}>
        <div className={style.totalOrder}>
          <h3>Total Order</h3>
          <p className={style.delivery}>
            Guaranteed delivery day: {deliveryDate}
          </p>
        </div>
        <span className={style.fullPrice}>
          {(totalPrice + taxPrice).toFixed(2)} USD
        </span>
      </div>
    </div>
  );
};

export default Summary;
