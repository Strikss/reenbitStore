import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import ContentDesc from "../../components/contentProductDesc/ContentDesc";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import { useAction } from "../../hooks/useAction";
import style from "./ProductDescription.module.css";

const ProductDescription: React.FC = () => {
  //HOOKS
  const { id } = useParams<{ id: string }>();
  const { setCurrentID, reset, fetchProducts } = useAction();
  useEffect(() => {
    reset();
    fetchProducts();
    setCurrentID(id);
    document
      .getElementById("productDescription")
      ?.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div className={style.container} id="productDescription">
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
