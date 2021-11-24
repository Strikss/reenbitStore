import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import style from "./AmountButton.module.css";
import arrow from "../../../../assets/images/arrow.svg";
import { ProdInf } from "../../../../interfaces/product";
import classNames from "classnames";

interface Props {
  buyBy: ProdInf["type"][];
  setTypeValue: React.Dispatch<React.SetStateAction<ProdInf["type"]>>;
  setAmountValue: React.Dispatch<React.SetStateAction<number>>;
  value?: number;
  currentType?: ProdInf["type"];
  max: number;
}

const AmountButton: React.FC<Props> = ({
  buyBy,
  setTypeValue,
  setAmountValue,
  value,
  currentType = buyBy[0],
  max,
}) => {
  //HOOKS
  const [type, setType] = useState<ProdInf["type"]>(currentType!);
  const [amount, setAmount] = useState(value!);

  //DROP DOWN
  const menuItem = buyBy.map((item: ProdInf["type"]) => {
    return (
      <Menu.Item key={item} onClick={() => setType(item)}>
        {item}
      </Menu.Item>
    );
  });
  const menu = <Menu>{menuItem}</Menu>;

  //CSS VALIDATION
  const error = amount <= 0 || amount > max;
  const inputClass = classNames(style.inputContainer, error && style.error);

  //FUNCTIONS
  useEffect(() => {
    setTypeValue(type);
    setAmountValue(amount);
  }, [type, amount]);

  return (
    <div className={style.container}>
      <div className={inputClass}>
        <input
          className={style.left}
          value={value}
          type="number"
          placeholder="1"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <div className={style.right}>
          <Dropdown arrow overlay={menu} trigger={["click"]}>
            <button className={style.dropButton}>
              <a onClick={(e) => e.preventDefault()}>
                {type}
                <img className={style.arrow} src={arrow} alt="arrow" />
              </a>
            </button>
          </Dropdown>
        </div>
      </div>
      {error ? <span className={style.errorText}>Error</span> : null}
    </div>
  );
};

export default AmountButton;
