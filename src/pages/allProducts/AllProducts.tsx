import React from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./AllProducts.module.css";
import Content from "../../components/content/Content";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Menu from "../../components/menu/Menu";

const AllProducts: React.FC = () => {
  return (
    <div className={style.allProducts}>
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
      <Content />
    </div>
  );
};

export default AllProducts;
