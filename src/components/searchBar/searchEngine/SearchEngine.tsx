import style from "./SearchEngine.module.css";
import searchLoop from "../../../assets/images/searchLoop.png";
import dropDownImg from "../../../assets/images/dropDown.png";
import React, { useState } from "react";
import { useAction } from "../../../hooks/useAction";

const SearchEngine: React.FC = () => {
  const [dropDown, setDropDown] = useState(false);
  const { filterByName } = useAction();
  const dropDownList = Array(5)
    .fill(0)
    .map((el) => <li onClick={() => setDropDown(!dropDown)}>category name</li>);

  return (
    <div className={style.searchBarWrapper}>
      <div className={style.formGroup}>
        <div className={style.dropDown}>
          <div
            className={style.defaultOption}
            onClick={() => setDropDown(!dropDown)}
          >
            All categories <img src={dropDownImg} alt="dropDown" />
          </div>
          {dropDown && (
            <div className={style.dropDownList}>
              <ul>{dropDownList}</ul>
            </div>
          )}
        </div>
        <div className={style.search}>
          <input
            onChange={(e) => filterByName(e.target.value)}
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
