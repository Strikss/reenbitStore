import { Pagination } from "antd";
import style from "./CustomPagination.module.css";
import productArrow from "../../../../assets/images/productArrow.svg";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import React, { useEffect } from "react";

const CustomPagination: React.FC = () => {
  const { setCurrentPage, setProductPortion } = useAction();
  const { filteredProductCount, productPortion, currentPage, products } =
    useAppSelector((state) => state.products);
  const totalProductsCount = products.length;
  const numberOfPages = Math.ceil(filteredProductCount / productPortion);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    document.getElementById("scroller")?.scroll(0, 0);
  };
  useEffect(() => {
    currentPage > numberOfPages && setCurrentPage(1);
  }, [numberOfPages]);

  return (
    <div className={style.paginationContainer}>
      <Pagination
        className={style.pagination}
        size="small"
        showSizeChanger={false}
        total={filteredProductCount}
        onChange={onPageChange}
        current={currentPage}
        pageSize={productPortion}
      />
      {productPortion < filteredProductCount && numberOfPages !== currentPage && (
        <button className={style.button} onClick={() => setProductPortion()}>
          Show more products
          <img className={style.arrow} src={productArrow} alt="arrow" />
        </button>
      )}
      <div>
        <span className={style.totalProductsCount}>{totalProductsCount}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default CustomPagination;
