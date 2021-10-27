import { useEffect } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import cleanProduct from "./product/cleanProduct";
import Product from "./product/Product";

const AllProducts = () => {
  const { fetchProducts } = useAction();
  const { products, filterName, filterStars } = useAppSelector(
    (state) => state.products
  );
  const filteredProducts = cleanProduct(products, filterName, filterStars);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {filteredProducts.map((prod) => (
        <Product prod={prod} />
      ))}
    </div>
  );
};

export default AllProducts;
