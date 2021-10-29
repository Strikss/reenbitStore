import { useAppSelector } from "../../../../hooks/selectorHook";
import Product from "./product/Product";
import style from "./AllProductsList.module.css";
import mainFilter from "./product/mainFilter";

const AllProductsList = () => {
  const { products, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );

  const filteredProducts = mainFilter(products, filterName, filterStars)
    .slice(1, 5)
    .map((prod) => <Product prod={prod} key={prod.itemID} />);

  return <div className={style.container}>{filteredProducts}</div>;
};

export default AllProductsList;
