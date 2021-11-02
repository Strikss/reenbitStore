import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import { useAction } from "../../../../../hooks/useAction";
import style from "./FilterByCategories.module.css";
import classNames from "classnames";

const FilterByCategories: React.FC = () => {
  //HOOKS
  const { products, filterCategories } = useAppSelector(
    (state) => state.products
  );
  const { filterByCategories } = useAction();

  //UNIC CATEGORIES
  const allCategories = products.map((prod) => prod.category);
  const unicCategories: { [key: string]: number } = allCategories.reduce(
    (prev: { [key: string]: number }, cur) => {
      prev[cur] = ++prev[cur] || 1;
      return prev;
    },
    {}
  );

  //CSS CLASSES
  const selected = classNames(style.itemContainer, style.selected);

  //FUNCTIONS
  const setCategory = (category: string) => {
    filterByCategories(category);
  };

  //CATEGORYS HTML
  const categoryItems = Object.keys(unicCategories).map((key, index) => {
    return (
      <li
        key={index}
        className={key === filterCategories ? selected : style.itemContainer}
        onClick={() => setCategory(key)}
      >
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
