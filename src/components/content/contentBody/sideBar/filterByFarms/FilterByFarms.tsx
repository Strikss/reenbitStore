import React from "react";
import { useAppSelector } from "../../../../../hooks/selectorHook";
import CheckBox from "../../../../custom/CheckBox";
import style from "./FilterByFarms.module.css";

const FilterByFarms: React.FC = () => {
  const { products } = useAppSelector((state) => state.products);

  const allFarms = products.map((prod) => prod.farm);
  const unicFarms = allFarms.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  const farms = unicFarms.map((el, i) => (
    <li className={style.oneBox} key={i}>
      <CheckBox />
      <span>{el}</span>
    </li>
  ));

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
