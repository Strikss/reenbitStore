import React from "react";
import { ProductsType } from "../../../../../interfaces/product";
import style from "./Product.module.css";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  const discount = 100 - (product.priceHalf / product.priceFull) * 100;

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        {discount && (
          <p className={style.discount}>{`- ${discount.toFixed(0)} %`}</p>
        )}
        <img
          className={style.productImage}
          src={product.image}
          alt="product Image"
        />
      </div>
      <div className={style.description}>
        <div className={style.topPart}>
          <h1 className={style.title}>{product.name}</h1>
          <p>{product.description}</p>
        </div>
        <div className={style.bottomPart}>
          <div className={style.priceContainer}>
            <h1 className={style.priceHalf}>
              {product.priceHalf.toFixed(2)} <span>USD</span>
            </h1>
            <p className={style.priceFull}>
              <s>
                {product.priceFull.toFixed(2)} <span>USD</span>
              </s>
            </p>
          </div>
          <button className={style.button}>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
