import { FC, useEffect } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";
import s from "./Product.module.css";
const Product: FC = () => {
  const { fetchProducts } = useAction();
  const { fruits } = useAppSelector((state) => state.products);
  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <div>
      {fruits.map((fruit) => (
        <div className={s.container}>
          <div className={s.imgBx}></div>
          <div className={s.details}></div>
        </div>
      ))}
    </div>
  );
};

export default Product;
