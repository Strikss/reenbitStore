import React from "react";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.mainWrapper}>
      <ul className={style.left}>
        <li className={style.item}>
          <a href="#">Chat with us</a>
        </li>
        <li className={style.item}>
          <a href="#">+420 336 775 664</a>
        </li>
        <li className={style.item}>
          <a href="#">info@freshnesecom.com</a>
        </li>
      </ul>
      <ul className={style.right}>
        <li className={style.item}>
          <a href="#">Blog</a>
        </li>
        <li className={style.item}>
          <a href="#">About Us</a>
        </li>
        <li className={style.item}>
          <a href="#">Careers</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
