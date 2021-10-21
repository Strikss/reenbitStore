import React from "react";
import Caterogy from "./SearchEngine";
import Menu from "./Menu";
import style from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={style.searchBarPage}>
      <div className={style.top}>
        <div>Freshnesecom</div>
        <div>
          <Caterogy />
        </div>
        <div>head</div>
        <div>shop</div>
      </div>
      <div className={style.bottom}>
        <Menu />
      </div>
    </div>
  );
};

export default SearchBar;
