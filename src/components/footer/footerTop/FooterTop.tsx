import React from "react";
import style from "./FooterTop.module.css";

const FooterTop: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.onePortion}>
        <h1 className={style.title}>Get in touch</h1>
        <ul className={style.item}>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              About us
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Careers
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Press Releases
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className={style.secondPortion}>
        <h1 className={style.title}>Connections</h1>
        <ul className={style.secondItem}>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Facebook
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Twitter
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Instagram
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Youtube
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className={style.onePortion}>
        <h1 className={style.title}>Earnings</h1>
        <ul className={style.item}>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Become an Affiliate
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Advertise your product
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Sell on Market
            </a>
          </li>
        </ul>
      </div>
      <div className={style.secondPortion}>
        <h1 className={style.title}>Account</h1>
        <ul className={style.secondItem}>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Your account
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Returns Centre
            </a>
          </li>

          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Chut with us
            </a>
          </li>
          <li className={style.descriptionTitle}>
            <a className={style.item} href="#">
              Help
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
