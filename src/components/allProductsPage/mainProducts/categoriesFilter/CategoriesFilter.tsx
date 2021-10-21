import { FC } from "react";
import { useAppSelector } from "../../../../hooks/selectorHook";
import s from "./CategoriesFilter.module.css";
const CategoriesFilter: FC = () => {
  const { fruits } = useAppSelector((state) => state.products);
  const categories = Array();
  fruits.map((elem) => {
    if (!categories.includes(elem.itemCategory)) {
      categories.push(elem.itemCategory);
    }
  });

  return (
    <>
      {categories.map((elem, index) => {
        const fruitCount = fruits.filter((fruit) => fruit.itemCategory == elem);
        return (
          <div key={index} className={s.container}>
            <div>{elem}</div>
            <div>{fruitCount.length}</div>
          </div>
        );
      })}
    </>
  );
};
export default CategoriesFilter;
