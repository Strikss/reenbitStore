import React from "react";
import { start } from "repl";
import CheckBox from "../../../../../assets/customButtons/CheckBox";
import { useAction } from "../../../../../hooks/useAction";
import style from "./FilterByStars.module.css";
import StarsGenerator from "./StarsGenerator";

const FilterByStars: React.FC = () => {
  const { filterByStars } = useAction();
  const oneRating = Array(5).fill(0);
  const handleClick = (index: number) => {
    filterByStars(index);
  };
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
