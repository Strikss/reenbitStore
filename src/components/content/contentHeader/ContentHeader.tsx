import { useAppSelector } from "../../../hooks/selectorHook";
import style from "./ContentHeader.module.css";

const ContentHeader = () => {
  //HOOKS
  const { filteredProductCount, productPortion } = useAppSelector(
    (state) => state.products
  );

  const productsOnPage =
    productPortion > filteredProductCount
      ? filteredProductCount
      : productPortion;

  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>All Products</h1>
      <div>
        <span className={style.totalCount}>
          {productsOnPage} / {filteredProductCount}
        </span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default ContentHeader;
