import { Carousel } from "antd";
import React from "react";
import { ProductsType } from "../../../../interfaces/product";
import style from "./ProductImage.module.css";

interface Props {
  product: ProductsType;
}

const ProductImage: React.FC<Props> = ({ product }) => {
  const discount = 100 - (product.priceHalf / product.priceFull) * 100;

  return (
    <div className={style.container}>
      <ul className={style.discountContainer}>
        {discount && (
          <li className={style.discount}>{`- ${discount.toFixed(0)} %`}</li>
        )}
        <li className={style.discount}>Free shipping</li>
      </ul>
      <div className={style.imageContainer}>
        <img
          className={style.mainImage}
          src={product?.image}
          alt="first image"
        />
        <img
          className={style.secondImage}
          src={product?.image}
          alt="second image"
        />
        <img
          className={style.secondImage}
          src={product?.image}
          alt="third image"
        />
      </div>
      {/*MOBILE*/}
      <div className={style.carousel}>
        <Carousel>
          <div>
            <img
              className={style.mainImage}
              src={product?.image}
              alt="first image"
            />
          </div>
          <div>
            <img
              className={style.secondImage}
              src={product?.image}
              alt="second image"
            />
          </div>
          <div>
            <img
              className={style.secondImage}
              src={product?.image}
              alt="third image"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProductImage;
