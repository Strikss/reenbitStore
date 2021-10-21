import React from "react";
import style from "./Header.module.css";
const Header: React.FC = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.left}>
        <div>Chat with us</div>
        <div>+420 336 775 664</div>
        <div>info@freshnesecom.com</div>
      </div>
      <div className={style.right}>
        <div>Blog</div>
        <div>About us</div>
        <div>Careers</div>
      </div>
    </div>
  );
};

export default Header;
