import React from "react";
import { useAppSelector } from "../../../hooks/selectorHook";
import style from "./ContentBody.module.css";
import ProductDesc from "./productDesc/ProductDesc";
import ProductImage from "./productImage/ProductImage";

const ContentBody: React.FC = () => {
  //HOOKS
  const { products, currentID } = useAppSelector((state) => state.products);
  const selectedProduct = products.find((prod) => prod.itemID === currentID);

  return selectedProduct ? (
    <div className={style.container}>
      <ProductImage />
      <ProductDesc product={selectedProduct} />
    </div>
  ) : (
    <div>No page here</div>
  );
};

export default ContentBody;
