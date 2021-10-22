import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import style from "./CategoriesFilter.module.css";

const CategoriesFilter: React.FC = () => {
  const { fruits } = useAppSelector((state) => state.products);
  const categories = Array();
  fruits.map((elem) => {
    if (!categories.includes(elem.category)) {
      categories.push(elem.category);
    }
  });
  const category = categories.map((elem, index) => {
    const fruitCount = fruits.filter((fruit) => fruit.category == elem);
    return (
      <div key={index} className={style.itemContainer}>
        <div className={style.item}>{elem}</div>
        <div className={style.item}>{fruitCount.length}</div>
      </div>
    );
  });

  return (
    <>
      <h1 className={style.header}>Categories</h1>
      <div>{category}</div>
    </>
  );
};
export default CategoriesFilter;
