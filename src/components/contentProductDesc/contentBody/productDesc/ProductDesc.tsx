import React from "react";
import TopPart from "./topPart/TopPart";
import style from "./ProductDesc.module.css";
import BottomPart from "./bottomPart/BottomPart";
import { ProductsType } from "../../../../interfaces/product";

interface Props {
  product: ProductsType;
}

const ProductDesc: React.FC<Props> = ({ product }) => {
  return (
    <div className={style.container}>
      <TopPart product={product} />
      <BottomPart product={product} />
    </div>
  );
};

export default ProductDesc;
