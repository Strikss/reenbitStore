import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { ProductsType } from "../../../../../interfaces/product";
import DescriptionTab from "./descriptionTab/DescriptionTab";
import style from "./ProductTabs.module.css";
import QuestionsTab from "./questionsTab/QuestionsTab";
import ReviewsTab from "./reviewsTab/ReviewsTab";

interface Props {
  product: ProductsType;
}

const ProductTabs: React.FC<Props> = ({ product }) => {
  //HOOKS
  const [currentTab, setCurrentTab] = useState(<DescriptionTab />);
  const [active, setActive] = useState("Description");
  const tabClass = classNames(style.title, style.active);

  useEffect(() => {
    setCurrentTab(<DescriptionTab />);
    setActive("Description");
  }, [product]);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <button
          className={active === "Description" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab(<DescriptionTab />);
            setActive("Description");
          }}
        >
          Description
        </button>
        <button
          className={active === "Reviews" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab(
              <ReviewsTab
                reviewCount={product.reviews}
                rating={product.rating}
              />
            );
            setActive("Reviews");
          }}
        >
          Reviews
          <span className={style.amount}>{product.reviews}</span>
        </button>
        <button
          className={active === "Questions" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab(<QuestionsTab questions={product.questions} />);
            setActive("Questions");
          }}
        >
          Questions <span className={style.amount}>{product.questions}</span>
        </button>
      </div>
      <div>{currentTab}</div>
    </div>
  );
};

export default ProductTabs;
