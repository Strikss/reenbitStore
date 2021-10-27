import { AllProductsState } from "../../../interfaces/product";
import Product from "./product/Product";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";
import { useAction } from "../../../hooks/useAction";
import { useEffect } from "react";
import cleanProduct from "./product/cleanProduct";

const ContentBody = ({
  products,
  filterName,
  filterStars,
  currentPage,
  productPortion,
}: AllProductsState) => {
  const { fetchProducts, filterProductCount } = useAction();
  const from = currentPage * productPortion - productPortion;
  const to = currentPage * productPortion;
  const product = cleanProduct(products, filterName, filterStars);
  useEffect(() => {
    fetchProducts();
    filterProductCount(product.length);
  }, [product.length]);

  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <SideBar />
      </div>
      <div className={style.products}>
        {product.slice(from, to).map((prod) => (
          <Product prod={prod} key={prod.itemID} />
        ))}
      </div>
    </div>
  );
};

export default ContentBody;
