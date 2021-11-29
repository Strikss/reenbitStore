import style from "./SearchEngine.module.css";
import searchLoop from "../../../assets/images/searchLoop.png";
import React from "react";
import { useAction } from "../../../hooks/useAction";
import DropDownMenu from "./DropDownMenu";

const SearchEngine: React.FC = () => {
  //HOOKS
  const { filterByName } = useAction();

  //FUNCTIONS
  const setName = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByName(e.target.value);
  };

  const debounce = (
    fn: (e: React.ChangeEvent<HTMLInputElement>) => void,
    delay: number
  ) => {
    let timeout: ReturnType<typeof setTimeout>;

    return (args: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        fn(args);
      }, delay);
    };
  };

  return (
    <div className={style.container}>
      <DropDownMenu />
      <div className={style.search}>
        <input
          onChange={debounce(setName, 500)}
          type="text"
          className={style.searchInput}
          placeholder="I'm looking ..."
        />
        <img className={style.searchLoop} src={searchLoop} alt="img here" />
      </div>
    </div>
  );
};

export default SearchEngine;
