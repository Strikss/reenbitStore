import { Pagination } from "antd";
import style from "./Paging.module.css";
import productArrow from "../../../assets/images/productArrow.svg";

interface Props {
  currentPage: number;
  filteredProductCount: number;
  productPortion: number;
  setCurrentPage: (page: number) => void;
}

const Paging = ({
  currentPage,
  productPortion,
  filteredProductCount,
  setCurrentPage,
}: Props) => {
  const productsLeft = filteredProductCount - productPortion;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.paginationContainer}>
      <Pagination
        className={style.pagination}
        size="small"
        showSizeChanger={false}
        defaultCurrent={currentPage}
        total={filteredProductCount}
        defaultPageSize={productPortion}
        onChange={onPageChange}
      />
      <button className={style.button}>
        Show more products
        <img className={style.arrow} src={productArrow} alt="arrow" />
      </button>
      <div>
        <span className={style.productsLeft}>{productsLeft}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default Paging;
