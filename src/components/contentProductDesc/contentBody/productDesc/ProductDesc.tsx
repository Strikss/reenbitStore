import React from "react";
import Context from "./context/Context";
import style from "./ProductDesc.module.css";
import ProductTabs from "./productTabs/ProductTabs";
import { ProductsType } from "../../../../interfaces/product";

interface Props {
  product: ProductsType;
}

const ProductDesc: React.FC<Props> = ({ product }) => {
  return (
    <div className={style.container}>
      <Context product={product} />
      <ProductTabs product={product} />
    </div>
  );
};

export default ProductDesc;
