import { useAppSelector } from "../../../hooks/selectorHook";
import style from "./ContentHeader.module.css";

const ContentHeader = () => {
  const productCount = useAppSelector(
    (state) => state.products.filteredProductCount
  );
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>All Products</h1>
      <div>
        <span className={style.totalCount}>{productCount}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default ContentHeader;
