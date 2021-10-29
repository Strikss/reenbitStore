import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./ProductDescription.module.css";

const ProductDescription: React.FC = () => {
  return (
    <div className={style.ProductDescription}>
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
    </div>
  );
};

export default ProductDescription;
