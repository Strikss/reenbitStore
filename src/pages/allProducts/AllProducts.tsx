import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import SearchBar from "../../components/searchBar/SearchBar";
import style from "./AllProducts.module.css";
import Content from "../../components/contentAllProducts/Content";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Menu from "../../components/menu/Menu";
import { useAction } from "../../hooks/useAction";
import Footer from "../../components/footer/Footer";
import { useAppSelector } from "../../hooks/selectorHook";
import { rebuyProducts } from "../../helpers/rebuyProducts/rebuyProducts";

const AllProducts: React.FC = () => {
  //HOOKS
  const { fetchProducts, reset, buyProduct } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);

  useEffect(() => {
    rebuyProducts(buyProduct, boughtProducts.length);
    reset();
    fetchProducts();
  }, []);

  return (
    <div className={style.container} id="scroller">
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
