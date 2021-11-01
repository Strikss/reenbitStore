import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./AllProducts.module.css";
import Content from "../../components/content/Content";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Menu from "../../components/menu/Menu";
import { useAction } from "../../hooks/useAction";
import Footer from "../../components/footer/Footer";

const AllProducts: React.FC = () => {
  const { fetchProducts } = useAction();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={style.allProducts} id="scroller">
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
      <Content />
      <Footer />
    </div>
  );
};

export default AllProducts;
