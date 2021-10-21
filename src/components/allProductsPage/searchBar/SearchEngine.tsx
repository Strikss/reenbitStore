import s from "./SearchBar.module.css";
import searchLoop from "./../../../generalStuff/searchLoop.png";
import dropDownImg from "./../../../generalStuff/dropDown.png";
import { useState } from "react";
import { useAction } from "../../../hooks/useAction";

const Caterogy = () => {
  const [dropDown, setDropDown] = useState(false);
  const { filterByName } = useAction();
  return (
    <div>
      <div className={s.searchBarWrapper}>
        <div className={s.formGroup}>
          <div className={s.dropDown}>
            <div
              className={s.defaultOption}
              onClick={() => setDropDown(!dropDown)}
            >
              All categories <img src={dropDownImg} alt="dropDown" />
            </div>
            {dropDown && (
              <div className={s.dropDownList}>
                <ul>
                  <li onClick={() => setDropDown(!dropDown)}>category name</li>
                  <li onClick={() => setDropDown(!dropDown)}>category name</li>
                  <li onClick={() => setDropDown(!dropDown)}>category name</li>
                  <li onClick={() => setDropDown(!dropDown)}>category name</li>
                </ul>
              </div>
            )}
          </div>
          <div className={s.search}>
            <input
              onChange={(e) => filterByName(e.target.value)}
              type="text"
              className={s.searchInput}
              placeholder="Search Products, categories ..."
            />
          </div>
          <button className={s.btn} type="submit">
            <img className={s.searchLoop} src={searchLoop} alt="img here" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Caterogy;
