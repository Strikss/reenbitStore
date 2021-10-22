import React from "react";
import style from "./Menu.module.css";
import arrow from "../../../assets/images/arrow.svg";

const Menu: React.FC = () => {
  return (
    <>
      <div className={style.menuWrapper}>
        <li className={style.item}>
          Electronics <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Food <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Clothes <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Skin and care <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Toys <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Special nutrition <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Sports and outdoors <img src={arrow} alt="" />
        </li>
        <li className={style.item}>
          Books <img src={arrow} alt="" />
        </li>
      </div>
    </>
  );
};

export default Menu;
