import React from "react";
import FooterBottom from "./footerBottom/FooterBottom";
import FooterTop from "./footerTop/FooterTop";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={style.container}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};

export default Footer;
