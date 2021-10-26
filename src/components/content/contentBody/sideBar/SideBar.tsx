import React from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import FilterByFarm from "./filterByFarm/FilterByFarm";
import FilterByPrice from "./filterByPrice/FilterByPrice";
import FilterByStars from "./filterByStars/FilterByStars";

const SideBar: React.FC = () => {
  return (
    <>
      <CategoriesFilter />
      <FilterByFarm />
      <FilterByStars />
      <FilterByPrice />
    </>
  );
};

export default SideBar;
