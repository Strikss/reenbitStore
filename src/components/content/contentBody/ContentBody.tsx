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
}: AllProductsState) => {
  const { fetchProducts } = useAction();
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <SideBar />
      </div>
      <div className={style.products}>
        {cleanProduct(products, filterName, filterStars).map((prod) => (
          <Product prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ContentBody;
