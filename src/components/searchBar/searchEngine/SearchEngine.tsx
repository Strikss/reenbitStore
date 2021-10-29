import style from "./SearchEngine.module.css";
import searchLoop from "../../../assets/images/searchLoop.png";
import React, { useState } from "react";
import { useAction } from "../../../hooks/useAction";
import { useAppSelector } from "../../../hooks/selectorHook";

const SearchEngine: React.FC = () => {
  //Hooks
  const { products, filterCategories } = useAppSelector(
    (state) => state.products
  );
  const { filterByName, filterByCategories } = useAction();
  const [dropDown, setDropDown] = useState(false);

  //Functions
  const setCategory = (category: string) => {
    setDropDown(!dropDown);
    filterByCategories(category);
  };
  const setName = (e: any) => {
    filterByName(e.target.value);
  };

  //DropDown
  const categories = Array();
  products.map((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });
  const dropDownList = categories.map((el, index) => (
    <li key={index} onClick={() => setCategory(el)}>
      {el}
    </li>
  ));

  //
  return (
    <div className={style.searchBarWrapper}>
      <div className={style.formGroup}>
        <div className={style.dropDown}>
          <div
            className={style.defaultOption}
            onClick={() => setDropDown(!dropDown)}
          >
            <span className={style.categories}>
              {filterCategories ? filterCategories : "All categories"}
            </span>
          </div>
          {dropDown && (
            <div className={style.dropDownList}>
              <ul>
                <li
                  className={style.allCategories}
                  onClick={() => setCategory("")}
                >
                  All Categories
                </li>
                {dropDownList}
              </ul>
            </div>
          )}
        </div>
        <div className={style.search}>
          <input
            onChange={setName}
            type="text"
            className={style.searchInput}
            placeholder="Search Products, categories ..."
          />
        </div>
        <img className={style.searchLoop} src={searchLoop} alt="img here" />
      </div>
    </div>
  );
};

export default SearchEngine;
