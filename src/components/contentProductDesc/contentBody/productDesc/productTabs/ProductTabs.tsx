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
  const [currentTab, setCurrentTab] = useState("Description");
  const tabClass = classNames(style.title, style.active);
  const Tab =
    currentTab === "Description" ? (
      <DescriptionTab />
    ) : currentTab === "Questions" ? (
      <QuestionsTab questions={product.questions} />
    ) : currentTab === "Reviews" ? (
      <ReviewsTab reviewCount={product.reviews} rating={product.rating} />
    ) : (
      ""
    );
  useEffect(() => {
    setCurrentTab("Description");
  }, [product]);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <button
          className={currentTab === "Description" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab("Description");
          }}
        >
          Description
        </button>
        <button
          className={currentTab === "Reviews" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab("Reviews");
          }}
        >
          Reviews
          <span className={style.amount}>{product.reviews}</span>
        </button>
        <button
          className={currentTab === "Questions" ? tabClass : style.title}
          onClick={() => {
            setCurrentTab("Questions");
          }}
        >
          Questions <span className={style.amount}>{product.questions}</span>
        </button>
      </div>
      <>{Tab}</>
    </div>
  );
};

export default ProductTabs;
