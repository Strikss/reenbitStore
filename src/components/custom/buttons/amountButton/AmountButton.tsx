import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import style from "./AmountButton.module.css";
import arrow from "../../../../assets/images/arrow.svg";
import { ProdInf } from "../../../../interfaces/product";

interface Props {
  buyBy: ProdInf["type"][];
  setTypeValue: React.Dispatch<React.SetStateAction<ProdInf["type"]>>;
  setAmountValue: React.Dispatch<React.SetStateAction<number>>;
  value?: number;
  currentType?: ProdInf["type"];
}

const AmountButton: React.FC<Props> = ({
  buyBy,
  setTypeValue,
  setAmountValue,
  value,
  currentType = buyBy[0],
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

  //FUNCTIONS
  useEffect(() => {
    setTypeValue(type);
    setAmountValue(amount);
  }, [type, amount]);

  return (
    <div className={style.container}>
      <input
        className={style.left}
        value={value}
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
  );
};

export default AmountButton;
