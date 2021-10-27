import { useAppSelector } from "../../../../hooks/selectorHook";
import cleanProduct from "./product/cleanProduct";
import Product from "./product/Product";
import style from "./AllProductsList.module.css";
const AllProductsList = () => {
  const { products, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );
  const filteredProducts = cleanProduct(products, filterName, filterStars);

  return (
    <div className={style.AllProductsListContainer}>
      {filteredProducts.map((prod) => (
        <Product prod={prod} />
      ))}
    </div>
  );
};

export default AllProductsList;
