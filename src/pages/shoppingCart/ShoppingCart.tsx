import React, { useEffect } from "react";
import { useParams } from "react-router";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import FormContent from "../../components/formContent/FormContent";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import SearchBar from "../../components/searchBar/SearchBar";
import { useAction } from "../../hooks/useAction";
import style from "./ShoppingCart.module.scss";

const ShoppingCart: React.FC = () => {
  //HOOKS
  const { id } = useParams<{ id: string }>();
  const { reset } = useAction();

  //FUNCTIONS
  useEffect(() => {
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
