import React from "react";
import style from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <div className={style.mainWrapper}>
      <ul className={style.left}>
        <li className={style.item}>Chat with us</li>
        <li className={style.item}>+420 336 775 664</li>
        <li className={style.item}>info@freshnesecom.com</li>
      </ul>
      <ul className={style.right}>
        <li className={style.item}>Blog</li>
        <li className={style.item}>About us</li>
        <li className={style.item}>Careers</li>
      </ul>
    </div>
  );
};

export default Header;
