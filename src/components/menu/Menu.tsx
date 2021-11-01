import React from "react";
import style from "./Menu.module.css";
import arrow from "../../assets/images/arrow.svg";

const Menu: React.FC = () => {
  return (
    <ul className={style.menuWrapper}>
      <li className={style.item}>
        <span>Electronics</span>
        <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Food</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Clothes</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Skin and care</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Toys</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Speacial nutrition</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Sport and outdoors</span> <img src={arrow} alt="" />
      </li>
      <li className={style.item}>
        <span>Books</span> <img src={arrow} alt="" />
      </li>
    </ul>
  );
};

export default Menu;
