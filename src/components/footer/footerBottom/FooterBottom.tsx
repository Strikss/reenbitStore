import React from "react";
import { footerElements } from "../../../static/footerElements";
import style from "./FooterBottom.module.css";

const FooterBottom: React.FC = () => {
  const footer = footerElements.map((el, i) => (
    <li className={style.item} key={i}>
      {el}
    </li>
  ));
  return (
    <div className={style.container}>
      <h1 className={style.title}>Product tags</h1>
      <ul className={style.listContainer}>{footer}</ul>
      <p className={style.copyright}>
        <span> Copyright &#169; 2020</span> <a href="#"> petrbilek.com</a>
      </p>
    </div>
  );
};

export default FooterBottom;
