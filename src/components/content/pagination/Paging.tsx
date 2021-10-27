import { Pagination } from "antd";
import style from "./Paging.module.css";
import productArrow from "../../../assets/images/productArrow.svg";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";
import { useEffect } from "react";

const Paging = () => {
  const { setCurrentPage } = useAction();
  const { filteredProductCount, productPortion, currentPage, products } =
    useAppSelector((state) => state.products);
  const totalProductsCount = products.length;
  const numberOfPages = Math.ceil(filteredProductCount / productPortion);
  useEffect(() => {
    currentPage > numberOfPages && setCurrentPage(1);
  }, [numberOfPages]);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className={style.paginationContainer}>
      <Pagination
        className={style.pagination}
        size="small"
        showSizeChanger={false}
        total={filteredProductCount}
        defaultPageSize={productPortion}
        onChange={onPageChange}
        current={currentPage}
      />
      <button className={style.button}>
        Show more products
        <img className={style.arrow} src={productArrow} alt="arrow" />
      </button>
      <div>
        <span className={style.totalProductsCount}>{totalProductsCount}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default Paging;
