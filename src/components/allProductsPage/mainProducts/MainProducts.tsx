import { FC } from "react";
import CategoriesFilter from "./categoriesFilter/CategoriesFilter";
import Product from "./product/Product";
import s from "./MainProducts.module.css";
const MainProducts: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.allFilters}>
        <CategoriesFilter />
      </div>
      <div className={s.product}>
        <Product />
      </div>
    </div>
  );
};

export default MainProducts;
