import React, { useEffect, useState } from "react";
import style from "./ContentFooter.module.css";
import Products from "./products/Products";
import arrow from "../../../assets/images/arrow.svg";
import { useAction } from "../../../hooks/useAction";
import { useAppSelector } from "../../../hooks/selectorHook";

const ContentFooter: React.FC = () => {
  //HOOKS
  const { setProductPortion } = useAction();
  const { products, currentID, productPortion } = useAppSelector(
    (state) => state.products
  );
  const [bottomBtn, setBottomBtn] = useState(false);

  //FILTERED PRODUCTS
  const selectedProduct = products.find((prod) => prod.itemID === currentID);
  const filteredProducts = products.filter(
    (prod) =>
      prod.itemID !== currentID && prod.category === selectedProduct?.category
  );

  //FUNCTIONS
  const moreProducts = () => {
    setProductPortion();
    setBottomBtn(true);
  };
  useEffect(() => {
    setBottomBtn(false);
  }, [currentID]);

  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h1 className={style.leftTitle}>You will maybe love</h1>
        {!bottomBtn && (
          <button
            disabled={productPortion >= filteredProducts.length}
            className={style.rightTitle}
            onClick={moreProducts}
          >
            <span>More products</span>
            <img className={style.arrow} src={arrow} alt="arrow" />
          </button>
        )}
      </div>
      <Products filteredProducts={filteredProducts} />
      {bottomBtn && (
        <div className={style.btnContainer}>
          <button
            disabled={productPortion >= filteredProducts.length}
            className={style.rightTitle}
            onClick={() => setProductPortion()}
          >
            <span>More products</span>
            <img className={style.arrow} src={arrow} alt="arrow" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ContentFooter;
