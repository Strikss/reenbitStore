import { useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/selectorHook";
import style from "./ContentHeader.module.css";

const ContentHeader = () => {
  const products = useAppSelector((state) => state.products.products);
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>All Products</h1>
      <div>
        <span className={style.totalCount}>{products.length}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default ContentHeader;
