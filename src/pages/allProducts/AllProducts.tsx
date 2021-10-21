import React from "react";
import Header from "../../components/header/Header";
import MainProducts from "../../components/mainProducts/MainProducts";
import Navigation from "../../components/navigation/Navigation";
import NavigationHeader from "../../components/navigationHeader/NavigationHeader";
import SearchBar from "../../components/searchBar/SearchBar";
import SortBy from "../../components/sortBy/SortBy";
import style from "./AllProducts.module.css";

const AllProducts: React.FC = () => {
  return (
    <div className={style.allProducts}>
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
