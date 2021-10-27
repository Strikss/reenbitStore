import { Pagination } from "antd";

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
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        showSizeChanger={false}
        defaultCurrent={currentPage}
        total={filteredProductCount}
        defaultPageSize={productPortion}
        onChange={onPageChange}
      />
    </div>
  );
};

export default Paging;
