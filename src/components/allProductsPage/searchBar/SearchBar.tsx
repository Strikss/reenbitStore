import { FC } from "react";
import Caterogy from "./SearchEngine";
import Menu from "./Menu";
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
      <div className={s.bottom}>
        <Menu />
      </div>
    </div>
  );
};

export default SearchBar;
