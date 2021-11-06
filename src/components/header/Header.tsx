import React from "react";
import style from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.mainWrapper}>
      <ul className={style.left}>
        <li className={style.item}>
          <a href="#" className={style.link}>
            Chat with us
          </a>
        </li>
        <li className={style.item}>
          <a href="tel:420-336-775-664" className={style.link}>
            +420 336 775 664
          </a>
        </li>
        <li className={style.item}>
          <a href="mailto:info@freshnesecom.com" className={style.link}>
            info@freshnesecom.com
          </a>
        </li>
      </ul>
      <ul className={style.right}>
        <li className={style.item}>
          <a href="#" className={style.link}>
            Blog
          </a>
        </li>
        <li className={style.item}>
          <a href="#" className={style.link}>
            About Us
          </a>
        </li>
        <li className={style.item}>
          <a href="#" className={style.link}>
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
