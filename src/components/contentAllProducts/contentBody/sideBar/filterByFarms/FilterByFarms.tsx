import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import { useAction } from "../../../../../hooks/useAction";
import CheckBox from "../../../../custom/checkBox/CheckBox";
import style from "./FilterByFarms.module.css";

const FilterByFarms: React.FC = () => {
  //HOOKS
  const { products } = useAppSelector((state) => state.products);
  const { filterByFarms } = useAction();

  //UNIC FARMS
  const allFarms = products.map((prod) => prod.farm);
  const unicFarms = allFarms.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  //FARMS HTML
  const farms = unicFarms.map((el, i) => (
    <li className={style.oneBox} key={i} onChange={() => handleClick(el)}>
      <CheckBox />
      <span>{el}</span>
    </li>
  ));

  //FUNCTIONS
  const handleClick = (el: string) => {
    filterByFarms(el);
  };
  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Farm</h1>
        <ul>{farms}</ul>
      </div>
    </>
  );
};

export default FilterByFarms;
