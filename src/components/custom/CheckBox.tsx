import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/selectorHook";
import style from "./CheckBox.module.css";

const CheckBox: React.FC = () => {
  const { filterFarms, filterStars } = useAppSelector(
    (state) => state.products
  );
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    filterFarms.length === 1 && filterStars.length === 1 && setChecked(false);
  }, [filterFarms, filterStars]);

  return (
    <label className={style.container}>
      <input
        type="checkbox"
        onClick={() => setChecked(!checked)}
        checked={checked}
      />
      <span className={style.checkmark}></span>
    </label>
  );
};

export default CheckBox;
