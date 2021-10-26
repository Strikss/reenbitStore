import React from "react";
import style from "./FilterByFarm.module.css";

const FilterByFarm: React.FC = () => {
  const Farms = Array(5)
    .fill(0)
    .map((_, i) => (
      <div className={style.oneBox} key={i}>
        <input className={style.checkbox} type="checkbox"></input>
        <div>Filter by Farm</div>
      </div>
    ));

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Farm</h1>
        <div>{Farms}</div>
      </div>
    </>
  );
};

export default FilterByFarm;
