import { Dropdown, Menu } from "antd";
import React, { useState } from "react";
import style from "./Buttons.module.css";
import arrow from "../../../../../../assets/images/arrow.svg";

const Buttons: React.FC = () => {
  //HOOKS
  const [amouth, setAmouth] = useState("Pcs");

  //DROPDOWN
  const menu = (
    <Menu>
      <Menu.Item onClick={() => setAmouth("Pcs")}>Pcs</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Kgs")}>Kgs</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Box")}>Box</Menu.Item>
      <Menu.Item onClick={() => setAmouth("Pack")}>Pack</Menu.Item>
    </Menu>
  );

  return (
    <div className={style.btnContainer}>
      <div className={style.amouthContainer}>
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
      <button className={style.button}>
        <span className={style.plus}>+</span>Add to cart
      </button>
    </div>
  );
};

export default Buttons;
