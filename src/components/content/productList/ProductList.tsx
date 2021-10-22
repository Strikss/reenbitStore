import React from "react";
import CategoriesFilter from "./filters/categoriesFilter/CategoriesFilter";
import FilterByCountry from "./filters/filterByCountry/FilterByCountry";
import FilterByStars from "./filters/filterByStars/FilterByStars";
import Product from "./product/Product";
import style from "./ProductList.module.css";

const ProductList: React.FC = () => {
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

export default ProductList;
