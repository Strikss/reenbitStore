import React from "react";
import style from "./SearchBar.module.css";
import SearchEngine from "./searchEngine/SearchEngine";
import manHead from "../../assets/images/manHead48.png";
import shoppingBag from "../../assets/images/shoppingBasket48.png";
import { RouteNames } from "../../router/router";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/selectorHook";

const SearchBar: React.FC = () => {
  //HOOKS
  const { boughtProducts } = useAppSelector((state) => state.products);
  const basketAmount =
    boughtProducts.length !== 0
      ? boughtProducts.length
      : localStorage.getItem("amount");

  return (
    <div className={style.container}>
      <h1 className={style.header}>
        <a href="#">Freshnesecom</a>
      </h1>
      <SearchEngine />
      <ul className={style.checkout}>
        <li>
          <img src={manHead} alt="head" className={style.man} />
        </li>
        <li className={style.basketContainer}>
          <NavLink to={RouteNames.SHOPPING_CART}>
            <img
              src={shoppingBag}
              alt="shoppingBag"
              className={style.shoppingBag}
            />
          </NavLink>
          <span className={style.amount}>{basketAmount}</span>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
