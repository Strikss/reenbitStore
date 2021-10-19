import { FC } from "react";
import s from "./Header.module.css";
const Header: FC = () => {
  return (
    <div className={s.mainWrapper}>
      <div className={s.left}>
        <div>Chat with us</div>
        <div>+420 336 775 664</div>
        <div>info@freshnesecom.com</div>
      </div>
      <div className={s.right}>
        <div>Blog</div>
        <div>About us</div>
        <div>Careers</div>
      </div>
    </div>
  );
};

export default Header;
