import React from "react";
import FilterByCategories from "./filterByCategories/FilterByCategories";
import FilterByFarm from "./filterByFarm/FilterByFarm";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByStars from "./filterByStars/FilterByStars";
import style from "./SideBar.module.css";

const SideBar: React.FC = () => {
  return (
    <div className={style.sideBarContainer}>
      <FilterByCategories />
      <FilterByFarm />
      <FilterByStars />
      <FilterByPrice />
    </div>
  );
};

export default SideBar;
