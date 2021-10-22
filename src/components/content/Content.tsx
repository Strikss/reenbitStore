import React from "react";
import ProductList from "./productList/ProductList";
import SortBy from "./sortBy/SortBy";

const Content: React.FC = () => {
  return (
    <>
      <h1>All Products</h1>
      <SortBy />
      <ProductList />
    </>
  );
};

export default Content;
