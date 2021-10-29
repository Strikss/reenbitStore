import React from "react";
import CheckBox from "../../../../custom/CheckBox";
import style from "./FilterByFarms.module.css";

const FilterByFarms: React.FC = () => {
  const farms = Array(5)
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
        <ul>{farms}</ul>
      </div>
    </>
  );
};

export default FilterByFarms;
