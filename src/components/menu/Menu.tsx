import React from "react";
import style from "./Menu.module.css";
import arrow from "../../assets/images/arrow.svg";
import { menuElements } from "../../static/menuElements";

const Menu: React.FC = () => {
  const menu = menuElements.map((el, i) => (
    <li className={style.item} key={i}>
      <span>{el}</span>
      <img src={arrow} alt="arrow" />
    </li>
  ));

  return <ul className={style.menuWrapper}>{menu}</ul>;
};

export default Menu;
