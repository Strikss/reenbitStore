import React, { useEffect, useState } from "react";
import style from "./Product.module.css";
import yellowStar from "../../../../assets/images/yellowStar.svg";
import whiteStar from "../../../../assets/images/whiteRatingStar.svg";
import { ProdInf } from "../../../../interfaces/product";
import heart from "../../../../assets/images/redHeart.svg";
import x from "../../../../assets/images/x.svg";
import { useAction } from "../../../../hooks/useAction";
import { Dropdown, Menu } from "antd";
import arrow from "../../../../assets/images/arrow.svg";

interface Props {
  product: ProdInf;
}

const Product: React.FC<Props> = ({ product }) => {
  //HOOKS
  const { removeProduct } = useAction();
  const [type, setType] = useState(product.type);
  const [value, setValue] = useState(product.amount);

  //STARS
  const starsArray = Array(5).fill(0);
  const stars = starsArray.map((_, i) => (
    <li key={i}>
      <img
        className={style.star}
        src={product!.product.rating > i ? yellowStar : whiteStar}
        alt="star"
      />
    </li>
  ));

  //DROPDOWN MENU
  const menu = (
    <Menu>
      <Menu.Item onClick={() => setType("Pcs")}>Pcs</Menu.Item>
      <Menu.Item onClick={() => setType("Kgs")}>Kgs</Menu.Item>
      <Menu.Item onClick={() => setType("Box")}>Box</Menu.Item>
      <Menu.Item onClick={() => setType("Pack")}>Pack</Menu.Item>
    </Menu>
  );

  //FUNCTIONS

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img className={style.img} src={product.product.image} alt="product" />
        <div className={style.wishList}>
          <img src={heart} alt="heart" /> <span>Wishlist</span>
        </div>
        <div
          className={style.deleteImg}
          onClick={() => removeProduct(product.product.itemID)}
        >
          <img src={x} alt="delete" />
          <span>Remove</span>
        </div>
      </div>
      <div className={style.contentContainer}>
        <h2 className={style.title}>{product.product.name}</h2>
        <ul className={style.valuesContainer}>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Farm:</span>
            <span className={style.listTitle}>{product.product.farm}</span>
          </li>
          <li className={style.listContainer}>
            <span className={style.listTitle}>Freshness:</span>
            <span className={style.listTitle}>{product.product.freshness}</span>
          </li>
        </ul>
        <ul className={style.starContainer}>{stars}</ul>
        <div className={style.priceContainer}>
          <h2 className={style.price}>
            {(product.product.priceHalf * value).toFixed(2)} <span>USD</span>
          </h2>
          <div className={style.amouthContainer}>
            <input
              className={style.left}
              type="number"
              placeholder="1"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              disabled
            />
            <div className={style.right}>
              <Dropdown arrow overlay={menu} trigger={["click"]} disabled>
                <button className={style.dropButton}>
                  <a onClick={(e) => e.preventDefault()}>
                    {type}
                    <img className={style.arrow} src={arrow} alt="arrow" />
                  </a>
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
