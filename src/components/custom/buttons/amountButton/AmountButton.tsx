import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import style from "./AmountButton.module.css";
import arrow from "../../../../assets/images/arrow.svg";

const AmountButton: React.FC = () => {
  //HOOKS
  const [amouth, setAmouth] = useState("Pcs");

  //DROPDOWN
  const menu = (
    <Menu>
      <Menu.Item key="Pcs" onClick={() => setAmouth("Pcs")}>
        Pcs
      </Menu.Item>
      <Menu.Item key="kgs" onClick={() => setAmouth("Kgs")}>
        Kgs
      </Menu.Item>
      <Menu.Item key="box" onClick={() => setAmouth("Box")}>
        Box
      </Menu.Item>
      <Menu.Item key="pack" onClick={() => setAmouth("Pack")}>
        Pack
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.container}>
      <input className={style.left} type="number" placeholder="1" />
      <div className={style.right}>
        <Dropdown arrow overlay={menu} trigger={["click"]}>
          <button className={style.dropButton}>
            <a onClick={(e) => e.preventDefault()}>
              {amouth}
              <img className={style.arrow} src={arrow} alt="arrow" />
            </a>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default AmountButton;
