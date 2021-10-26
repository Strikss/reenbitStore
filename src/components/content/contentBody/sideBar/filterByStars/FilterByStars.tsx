import React from "react";
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
    <div className={style.oneBox} key={index}>
      <input
        className={style.checkbox}
        type="checkbox"
        onChange={() => handleClick(index + 1)}
      ></input>
      <StarsGenerator yellow={index + 1} />
    </div>
  ));

  return (
    <>
      <h1 className={style.title}>Rating</h1>
      <div className={style.container}>{ratingComponent}</div>
    </>
  );
};

export default FilterByStars;
