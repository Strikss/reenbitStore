import { FC } from "react";
import Caterogy from "./Caterogy";
import s from "./SearchBar.module.css";

const SearchBar: FC = () => {
  return (
    <div className={s.searchBarPage}>
      <div className={s.top}>
        <div>Freshnesecom</div>
        <div>
          <Caterogy />
        </div>
        <div>head</div>
        <div>shop</div>
      </div>
      <div className={s.bottom}></div>
    </div>
  );
};

export default SearchBar;
