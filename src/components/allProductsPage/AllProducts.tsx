import { FC } from "react";
import Header from "./header/Header";
import SearchBar from "./searchBar/SearchBar";
import s from "./AllProducts.module.css";
import Navigation from "./navigation/Navigation";
import NavigationHeader from "./navigationHeader/NavigationHeader";
import SortBy from "./sortBy/SortBy";
import MainProducts from "./mainProducts/MainProducts";
const AllProducts: FC = () => {
  return (
    <div className={s.allProducts}>
      <Header />
      <SearchBar />
      <Navigation />
      <NavigationHeader />
      <SortBy />
      <MainProducts />
    </div>
  );
};

export default AllProducts;
