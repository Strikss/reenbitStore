import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import style from "./FilterByPrice.module.css";
import "antd/dist/antd.css";
import { Button } from "antd";

const FilterByPrice: React.FC = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const onChange = (value: any) => {
    setMinValue(value[0]);
    setMaxValue(value[1]);
  };
  const onAfterChange = (value: any) => {
    console.log("onAfterChange: ", value);
  };
  const reset = () => {
    setMinValue(0);
    setMaxValue(100);
  };
  return (
    <div className={style.filterContainer}>
      <h1 className={style.filterTitle}>Price</h1>
      <Slider
        range
        step={5}
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
        value={[minValue, maxValue]}
        trackStyle={[{ backgroundColor: "#6A983C" }]}
        handleStyle={[
          {
            borderColor: "#EBEBEB",
            height: 20,
            width: 20,
            backgroundColor: "white",
            marginTop: -6,
          },
          {
            borderColor: "#EBEBEB",
            height: 20,
            width: 20,
            backgroundColor: "white",
            marginTop: -6,
          },
        ]}
      />
      <div className={style.minMaxContainer}>
        <div className={style.min}>
          <div className={style.title}>Min</div>
          <div className={style.box}>
            <input
              className={style.input}
              type="text"
              placeholder="0"
              value={minValue}
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
              type="text"
              placeholder="000"
              value={maxValue}
              onChange={(e: any) => setMaxValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={style.reset}>
        <Button
          type="text"
          onClick={reset}
          size={"middle"}
          className={style.resetn}
        >
          <span className={style.resetText}>Reset</span>
        </Button>
      </div>
    </div>
  );
};

export default FilterByPrice;
