import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import style from "./FilterByCategories.module.css";

const FilterByCategories: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const allCategories = products.map((prod) => prod.category);
  const unicCategories: { [key: string]: number } = allCategories.reduce(
    (prev: { [key: string]: number }, cur) => {
      prev[cur] = ++prev[cur] || 0;
      return prev;
    },
    {}
  );

  const categoryItems = Object.keys(unicCategories).map((key, index) => {
    return (
      <li key={index} className={style.itemContainer}>
        <span className={style.item}>{key}</span>
        <span className={style.countCircle}>{unicCategories[key]}</span>
      </li>
    );
  });
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Categories</h1>
        <ul>{categoryItems}</ul>
      </div>
    </>
  );
};
export default FilterByCategories;
