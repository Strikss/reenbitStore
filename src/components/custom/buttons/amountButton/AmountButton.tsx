import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import style from "./AmountButton.module.css";
import arrow from "../../../../assets/images/arrow.svg";

interface Props {
  buyBy: string[];
}

const AmountButton: React.FC<Props> = ({ buyBy }) => {
  //HOOKS
  const [amount, setAmount] = useState(buyBy[0]);

  //DROP DOWN
  const menuItem = buyBy.map((item) => {
    return (
      <Menu.Item key={item} onClick={() => setAmount(item)}>
        {item}
      </Menu.Item>
    );
  });
  const menu = <Menu>{menuItem}</Menu>;

  return (
    <div className={style.container}>
      <input className={style.left} type="number" placeholder="1" />
      <div className={style.right}>
        <Dropdown arrow overlay={menu} trigger={["click"]}>
          <button className={style.dropButton}>
            <a onClick={(e) => e.preventDefault()}>
              {amount}
              <img className={style.arrow} src={arrow} alt="arrow" />
            </a>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default AmountButton;
