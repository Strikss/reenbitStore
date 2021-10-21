import React from "react";
import { useAppSelector } from "../../../hooks/selectorHook";
import style from "./CategoriesFilter.module.css";

const CategoriesFilter: React.FC = () => {
  const { fruits } = useAppSelector((state) => state.products);
  const categories = Array();
  fruits.map((elem) => {
    if (!categories.includes(elem.category)) {
      categories.push(elem.category);
    }
  });

  return (
    <>
      {categories.map((elem, index) => {
        const fruitCount = fruits.filter((fruit) => fruit.category == elem);
        return (
          <div key={index} className={style.container}>
            <div>{elem}</div>
            <div>{fruitCount.length}</div>
          </div>
        );
      })}
    </>
  );
};
export default CategoriesFilter;
