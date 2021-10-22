import React from "react";
import Header from "../../components/header/Header";
import MainProducts from "../../components/content/productList/ProductList";
import BreadCrumps from "../../components/breadCrumps/BreadCrumps";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./AllProducts.module.css";
import Content from "../../components/content/Content";

const AllProducts: React.FC = () => {
  return (
    <div className={style.allProducts}>
      <Header />
      <SearchBar />
      <BreadCrumps />
      <Content />
    </div>
  );
};

export default AllProducts;
