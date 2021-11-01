import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import style from "./FilterByPrice.module.css";
import "antd/dist/antd.css";
import { handleStyle, trackStyle } from "./sliderStyles";
import { useAction } from "../../../../../hooks/useAction";
import { useAppSelector } from "../../../../../hooks/selectorHook";

const FilterByPrice: React.FC = () => {
  //HOOKS
  const { filterByPrice } = useAction();
  const { products, filterPrice } = useAppSelector((state) => state.products);

  //CONST AND STATES
  const productPrices = products.map((prod) => prod.priceHalf);
  const maxProductPrice = Math.max(...productPrices);
  const minProductPrice = Math.min(...productPrices);

  const [minValue, setMinValue] = useState(minProductPrice);
  const [maxValue, setMaxValue] = useState(maxProductPrice);
  //FUNCITONS
  const onChange = (value: number[]) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };
  const onAfterChange = (value: number[]) => {
    filterByPrice(value);
  };
  useEffect(() => {
    filterPrice.length === 1 && setMaxValue(maxProductPrice);
    filterPrice.length === 1 && setMinValue(minProductPrice);
  }, [maxProductPrice, minProductPrice, filterPrice]);

  return (
    <div className={style.filterContainer}>
      <h1 className={style.filterTitle}>Price</h1>
      <Slider
        range
        step={1}
        min={minProductPrice}
        max={maxProductPrice}
        defaultValue={[80, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
        trackStyle={trackStyle}
        handleStyle={handleStyle}
        value={[minValue, maxValue]}
      />
      <div className={style.minMaxContainer}>
        <div className={style.min}>
          <div className={style.title}>Min</div>
          <div className={style.box}>
            <input
              className={style.input}
              type="number"
              placeholder="0"
              value={minValue}
              min="100"
              onChange={(e: any) => setMinValue(e.target.value)}
            />
          </div>
        </div>
        <div className={style.slash}>-</div>
        <div className={style.max}>
          <div className={style.title}>Max</div>
          <div className={style.box}>
            <input
              className={style.input}
              type="number"
              placeholder="000"
              value={maxValue}
              onChange={(e: any) => setMaxValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
