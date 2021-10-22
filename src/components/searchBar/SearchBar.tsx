import React from "react";
import style from "./SearchBar.module.css";
import SearchEngine from "./searchEngine/SearchEngine";
import manHead from "../../assets/images/manHead48.png";
import shoppingBag from "../../assets/images/shoppingBasket48.png";
import { RouteNames } from "../../router/router";
import { NavLink } from "react-router-dom";

const SearchBar: React.FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.header}>Freshnesecom</h1>
      <SearchEngine />
      <ul className={style.checkout}>
        <li>
          <img src={manHead} alt="head" className={style.man} />
        </li>
        <li>
          <NavLink to={RouteNames.SHOPPING_CART}>
            <img src={shoppingBag} alt="shoppingBag" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
