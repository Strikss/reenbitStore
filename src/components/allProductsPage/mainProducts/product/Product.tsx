import { FC, useEffect } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import { useAction } from "../../../../hooks/useAction";

const Product: FC = () => {
  const { fetchProducts } = useAction();
  const { fruits } = useAppSelector((state) => state.products);
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      helllosdsa
      <div>
        {fruits.map((fruit) => (
          <div>
            {fruit.itemName}+{fruit.delivery}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
