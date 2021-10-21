import React from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import Product from "./product/Product";
import style from "./MainProducts.module.css";
import FilterByCountry from "./filterByCountry/FilterByCountry";
import FilterByStars from "./filterByStars/FilterByStars";

const MainProducts: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.allFilters}>
        <CategoriesFilter />
        <FilterByCountry />
        <FilterByStars />
      </div>
      <div className={style.product}>
        <Product />
      </div>
    </div>
  );
};

export default MainProducts;
