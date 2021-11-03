import style from "./SearchEngine.module.css";
import searchLoop from "../../../assets/images/searchLoop.png";
import React, { useState } from "react";
import { useAction } from "../../../hooks/useAction";
import DropDownMenu from "./DropDownMenu";

const SearchEngine: React.FC = () => {
  //HOOKS
  const { filterByName } = useAction();

  //FUNCTIONS
  const setName = (e: any) => {
    filterByName(e.target.value);
  };

  return (
    <div className={style.container}>
      <DropDownMenu />
      <div className={style.search}>
        <input
          onChange={setName}
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
