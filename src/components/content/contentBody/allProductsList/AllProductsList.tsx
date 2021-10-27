import { useAppSelector } from "../../../../hooks/selectorHook";
import cleanProduct from "./product/cleanProduct";
import Product from "./product/Product";

const AllProductsList = () => {
  const { products, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );
  const filteredProducts = cleanProduct(products, filterName, filterStars);

  return (
    <div>
      {filteredProducts.map((prod) => (
        <Product prod={prod} />
      ))}
    </div>
  );
};

export default AllProductsList;
