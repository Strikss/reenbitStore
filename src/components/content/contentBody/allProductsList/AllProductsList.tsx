import { useAppSelector } from "../../../../hooks/selectorHook";
import cleanProduct from "./product/cleanProduct";
import Product from "./product/Product";
import style from "./AllProductsList.module.css";
import { useAction } from "../../../../hooks/useAction";
import { useEffect } from "react";

const AllProductsList = () => {
  const { filterProductCount } = useAction();
  const { products, filterName, filterStars, currentPage, productPortion } =
    useAppSelector((state) => state.products);

  const filteredProducts = cleanProduct(products, filterName, filterStars);
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
