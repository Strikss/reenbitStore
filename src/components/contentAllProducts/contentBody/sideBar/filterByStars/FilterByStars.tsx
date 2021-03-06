import React from "react";
import { useAction } from "../../../../../hooks/useAction";
import CheckBox from "../../../../custom/checkBox/CheckBox";
import style from "./FilterByStars.module.css";
import StarsGenerator from "./StarsGenerator";

const FilterByStars: React.FC = () => {
  //HOOKS
  const { filterByStars } = useAction();

  //CHECKBOX WITH STAR HTML
  const oneRating = Array(5).fill(0);
  const ratingComponent = oneRating.map((_, index) => (
    <li
      className={style.oneBox}
      key={index}
      onChange={() => handleClick(index + 1)}
    >
      <CheckBox />
      <ul className={style.starList}>
        <StarsGenerator yellow={index + 1} />
      </ul>
    </li>
  ));

  //FUNCTIONS
  const handleClick = (index: number) => {
    filterByStars(index);
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Rating</h1>
        <ul className={style.componentContainer}>{ratingComponent}</ul>
      </div>
    </>
  );
};

export default FilterByStars;
