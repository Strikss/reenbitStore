import { FC } from "react";
import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import s from "./AllProducts.module.css";
const AllProducts: FC = () => {
  return (
    <div className={s.allProducts}>
      <Header />
      <SearchBar />
    </div>
  );
};

export default AllProducts;
