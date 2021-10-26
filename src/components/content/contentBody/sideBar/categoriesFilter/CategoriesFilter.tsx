import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import style from "./CategoriesFilter.module.css";

const CategoriesFilter: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);
  const categories = Array();
  products.map((elem) => {
    if (!categories.includes(elem.category)) {
      categories.push(elem.category);
    }
  });
  const category = categories.map((elem, index) => {
    const fruitCount = products.filter((fruit) => fruit.category == elem);
    return (
      <div key={index} className={style.itemContainer}>
        <div className={style.item}>{elem}</div>
        <div className={style.item}>
          <span className={style.countCircle}>{fruitCount.length}</span>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1 className={style.title}>Categories</h1>
      <div>{category}</div>
    </>
  );
};
export default CategoriesFilter;
