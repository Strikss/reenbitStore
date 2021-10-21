import { FC } from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import Product from "./product/Product";
import s from "./MainProducts.module.css";
import FilterByCountry from "./filterByCountry/FilterByCountry";
import FilterByStars from "./filterByStars/FilterByStars";

const MainProducts: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.allFilters}>
        <CategoriesFilter />
        <FilterByCountry />
        <FilterByStars />
      </div>
      <div className={s.product}>
        <Product />
      </div>
    </div>
  );
};

export default MainProducts;
