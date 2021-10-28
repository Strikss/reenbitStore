import React from "react";
import CheckBox from "../../../../../assets/customButtons/CheckBox";
import style from "./FilterByFarm.module.css";

const FilterByFarm: React.FC = () => {
  const Farms = Array(5)
    .fill(0)
    .map((_, i) => (
      <li className={style.oneBox} key={i}>
        <CheckBox />
        <span>Filter by Farm</span>
      </li>
    ));

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Farm</h1>
        <ul>{Farms}</ul>
      </div>
    </>
  );
};

export default FilterByFarm;
