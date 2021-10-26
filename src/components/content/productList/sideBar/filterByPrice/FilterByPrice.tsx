import React from "react";
import { Slider } from "antd";
import "antd/dist/antd.css";
import style from "./FilterByPrice.module.css";

const FilterByPrice: React.FC = () => {
  const onChange = (value: any) => {
    console.log("onChange: ", value);
  };

  const onAfterChange = (value: any) => {
    console.log("onAfterChange: ", value);
  };
  return (
    <div>
      <h1>Price</h1>
      <Slider
        range
        step={10}
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
      <div className={style.minMaxContainer}>
        <div className={style.min}>
          <div className={style.title}>Min</div>
          <div className={style.box}>
            <input className={style.input} type="text" />
          </div>
        </div>
        <div className={style.max}>
          <div className={style.title}>max</div>
          <div className={style.box}>
            <input className={style.input} type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
