import React from "react";
import FilterByCategories from "./filterByCategories/FilterByCategories";
import FilterByFarms from "./filterByFarms/FilterByFarms";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByStars from "./filterByStars/FilterByStars";
import Reset from "./reset/Reset";
import style from "./SideBar.module.css";

const SideBar: React.FC = () => {
  return (
    <div className={style.sideBarContainer}>
      <FilterByCategories />
      <FilterByFarms />
      <FilterByStars />
      <FilterByPrice />
      <Reset />
    </div>
  );
};

export default SideBar;
