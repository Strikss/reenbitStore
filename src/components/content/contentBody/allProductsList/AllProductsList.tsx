import { useAppSelector } from "../../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./AllProductsList.module.css";
import { useAction } from "../../../../hooks/useAction";
import { useEffect } from "react";
import mainFilter from "../../../mainFilter/mainFilter";

const AllProductsList = () => {
  const { filterProductCount } = useAction();
  const {
    products,
    filterName,
    filterStars,
    currentPage,
    productPortion,
    filterCategories,
    sortBy,
  } = useAppSelector((state) => state.products);

  const filteredProducts = mainFilter(
    products,
    filterName,
    filterStars,
    filterCategories,
    sortBy
  );
  const from = currentPage * productPortion - productPortion;
  const to = currentPage * productPortion;

  useEffect(() => {
    filterProductCount(filteredProducts.length);
  }, [filteredProducts.length]);

  return (
    <div className={style.AllProductsListContainer}>
      {filteredProducts.slice(from, to).map((prod) => (
        <Product prod={prod} key={prod.itemID} />
      ))}
    </div>
  );
};

export default AllProductsList;
