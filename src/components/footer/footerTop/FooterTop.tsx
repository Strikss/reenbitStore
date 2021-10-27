import React from "react";
import style from "./FooterTop.module.css";

const FooterTop: React.FC = () => {
  return (
    <div className={style.container}>
      <ul className={style.item}>
        <h1 className={style.title}>Get in touch</h1>
        <li className={style.descriptionTitle}>
          <a href="#">About us</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Careers</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Press Releases</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul className={style.item}>
        <h1 className={style.title}>Connections</h1>
        <li className={style.descriptionTitle}>
          <a href="#">Facebook</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Twitter</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Instagram</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Youtube</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
      <ul className={style.item}>
        <h1 className={style.title}>Earnings</h1>
        <li className={style.descriptionTitle}>
          <a href="#">Become an Affiliate</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Advertise your product</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Sell on Market</a>
        </li>
      </ul>
      <ul className={style.item}>
        <h1 className={style.title}>Account</h1>
        <li className={style.descriptionTitle}>
          <a href="#">Your account</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Returns Centre</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">100 % purchase protection</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Chut with us</a>
        </li>
        <li className={style.descriptionTitle}>
          <a href="#">Help</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterTop;
