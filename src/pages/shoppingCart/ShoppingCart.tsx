import React, { useEffect } from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FormContent from "../../components/formContent/FormContent";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import { useAppSelector } from "../../hooks/selectorHook";
import { useAction } from "../../hooks/useAction";
import style from "./ShoppingCart.module.css";
import { ProdInf } from "../../interfaces/product";

const ShoppingCart: React.FC = () => {
  //HOOKS
  const { id } = useParams<{ id: string }>();
  const { reset, buyProduct } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);

  //LOCAL STORAGE
  const setProducts = () => {
    localStorage.setItem("products", JSON.stringify(boughtProducts));
    localStorage.setItem("amount", JSON.stringify(boughtProducts.length));
  };

  const rebuyProducts = () => {
    const value: ProdInf[] = JSON.parse(
      localStorage.getItem("products") as string
    );
    if (value !== null) {
      value.forEach((el) => buyProduct(el));
    }
  };

  //FUNCTIONS
  useEffect(() => {
    boughtProducts.length !== 0 && setProducts();
  }, [JSON.stringify(boughtProducts)]);

  useEffect(() => {
    boughtProducts.length === 0 && localStorage.length !== 0 && rebuyProducts();
    reset();
  }, [id]);

  return (
    <div className={style.container} id="shoppingCart">
      <Header />
      <SearchBar />
      <Menu />
      <Breadcrumbs />
      <FormContent />
    </div>
  );
};

export default ShoppingCart;
