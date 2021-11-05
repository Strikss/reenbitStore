import React, { useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContentDesc from "../../components/contentProductDesc/ContentDesc";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import { useAction } from "../../hooks/useAction";
import style from "./ProductDescription.module.css";

const ProductDescription: React.FC = () => {
  const { fetchProducts } = useAction();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={style.ProductDescription}>
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
      <ContentDesc />
      <Footer />
    </div>
  );
};

export default ProductDescription;
