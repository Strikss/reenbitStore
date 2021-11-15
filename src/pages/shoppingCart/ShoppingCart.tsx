import React from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FormContent from "../../components/formContent/FormContent";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./ShoppingCart.module.css";

const ShoppingCart: React.FC = () => {
  return (
    <div className={style.container}>
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
      <FormContent />
    </div>
  );
};

export default ShoppingCart;
