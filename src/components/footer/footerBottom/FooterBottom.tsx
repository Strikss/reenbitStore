import React from "react";
import style from "./FooterBottom.module.css";

const FooterBottom: React.FC = () => {
  const footerElements = [
    "Beans",
    "Carrots",
    "Apples",
    "Garlic",
    "Mushrooms",
    "Tomatoes",
    "Chilli peppers",
    "Broccoli",
    "Watermelons",
    "Oranges",
    "Bananas",
    "Grapes",
    "Cherries",
    "Meat",
    "Seo tag",
    "Fresh food",
    "Lemons",
  ];
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
