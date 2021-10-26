import React from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import FilterByFarm from "./filterByFarm/FilterByFarm";
import FilterByStars from "./filterByStars/FilterByStars";

const SideBar: React.FC = () => {
  return (
    <>
      <CategoriesFilter />
      <FilterByFarm />
      <FilterByStars />
    </>
  );
};

export default SideBar;
