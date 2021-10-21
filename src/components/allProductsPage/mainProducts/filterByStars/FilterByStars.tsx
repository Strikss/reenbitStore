import { FC } from "react";
import s from "./FilterByStars.module.css";

import StarsGenerator from "./StarsGenerator";

const FilterByStars: FC = () => {
  return (
    <div className={s.container}>
      <div>
        <input type="checkbox"></input>
        <StarsGenerator yellow={5} white={5} />
      </div>
      <div></div>
    </div>
  );
};

export default FilterByStars;
