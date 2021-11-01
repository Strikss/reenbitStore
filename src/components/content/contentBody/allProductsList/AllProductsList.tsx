import { useAppSelector } from "../../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./AllProductsList.module.css";
import { useAction } from "../../../../hooks/useAction";
import { useEffect } from "react";
import mainFilter from "../../../mainFilter/mainFilter";

const AllProductsList: React.FC = () => {
  //HOOKS
  const { filterProductCount } = useAction();
  const {
    products,
    filterName,
    filterStars,
    currentPage,
    productPortion,
    filterCategories,
    sortBy,
    filterFarms,
    filterPrice,
  } = useAppSelector((state) => state.products);

  //FILTERS
  const filteredProducts = mainFilter(
    products,
    filterName,
    filterStars,
    filterCategories,
    sortBy,
    filterFarms,
    filterPrice
  );

  //PAGINATION
  const from = currentPage * productPortion - productPortion;
  const to = currentPage * productPortion;

  //FUNCTIONS
  useEffect(() => {
    filterProductCount(filteredProducts.length);
  }, [filteredProducts.length]);

  return (
    <div className={style.container}>
      {filteredProducts.slice(from, to).map((prod) => (
        <Product prod={prod} key={prod.itemID} />
      ))}
    </div>
  );
};

export default AllProductsList;
