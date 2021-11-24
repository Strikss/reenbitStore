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

const ShoppingCart: React.FC = () => {
  //HOOKS
  const { id } = useParams<{ id: string }>();
  const { reset, buyProduct } = useAction();
  const { boughtProducts } = useAppSelector((state) => state.products);

  //LOCAL STORAGE
  const rebuyProducts = () => {
    const keys = Object.keys(localStorage);
    keys.forEach((el) => {
      const value = localStorage[el];

      if (value.includes("{" && "}")) {
        const product = JSON.parse(value);
        buyProduct(product);
      }
    });
  };

  useEffect(() => {
    boughtProducts.length === 0 && rebuyProducts();
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
