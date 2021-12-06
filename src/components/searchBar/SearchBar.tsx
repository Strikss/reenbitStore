import React, { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import SearchEngine from "./searchEngine/SearchEngine";
import manHead from "../../assets/images/manHead48.png";
import shoppingBag from "../../assets/images/shoppingBasket48.png";
import { RouteNames } from "../../router/router";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/selectorHook";
import LogIn from "./logIn/LogIn";
import { Modal } from "antd";

const SearchBar: React.FC = () => {
  //HOOKS
  const { boughtProducts, profile } = useAppSelector((state) => state.products);
  const [visible, setVisible] = React.useState(false);

  //FUNCTIONS
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className={style.container}>
      <h1 className={style.header}>
        <a href="#">Freshnesecom</a>
      </h1>
      <SearchEngine />
      <ul className={style.checkout}>
        <li>
          <img
            src={profile.name ? profile.imageUrl : manHead}
            alt="head"
            className={style.man}
            onClick={showModal}
          />
          <Modal
            title="Login"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <LogIn />
          </Modal>
        </li>
        <li className={style.basketContainer}>
          <NavLink to={RouteNames.SHOPPING_CART}>
            <img
              src={shoppingBag}
              alt="shoppingBag"
              className={style.shoppingBag}
            />
          </NavLink>
          <span className={style.amount}>{boughtProducts.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default SearchBar;
