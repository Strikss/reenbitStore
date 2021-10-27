import React from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import FilterByFarm from "./filterByFarm/FilterByFarm";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByStars from "./filterByStars/FilterByStars";
import style from "./SideBar.module.css";

const SideBar: React.FC = () => {
  return (
    <div className={style.sideBarContainer}>
      <CategoriesFilter />
      <FilterByFarm />
      <FilterByStars />
      <FilterByPrice />
    </div>
  );
};

export default SideBar;
