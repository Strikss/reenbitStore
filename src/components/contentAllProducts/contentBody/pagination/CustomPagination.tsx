import { Pagination } from "antd";
import style from "./CustomPagination.module.css";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import React, { useEffect } from "react";
import downArrow from "../../../../assets/images/downArrow.svg";
import BuyButton from "../../../custom/buttons/buyButton/BuyButton";

const CustomPagination: React.FC = () => {
  //HOOKS
  const { setCurrentPage, setProductPortion } = useAction();
  const { filteredProductCount, productPortion, currentPage, products } =
    useAppSelector((state) => state.products);

  //PAGINATION
  const totalProductsCount = products.length;
  const numberOfPages = Math.ceil(filteredProductCount / productPortion);

  //FUNCTIONS
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    document
      .getElementById("scroller")
      ?.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    currentPage > numberOfPages && setCurrentPage(1);
  }, [numberOfPages, currentPage]);

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
      <Pagination
        className={style.mobilePagination}
        simple
        size="small"
        total={filteredProductCount}
        onChange={onPageChange}
        current={currentPage}
        pageSize={productPortion}
        hideOnSinglePage
      />
      {productPortion < filteredProductCount &&
        numberOfPages !== currentPage && (
          <BuyButton
            type="pagination"
            handleClick={setProductPortion}
            text="Show more products"
            suffix={downArrow}
          />
        )}
      <div className={style.countContainer}>
        <span className={style.totalProductsCount}>{totalProductsCount}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default CustomPagination;
