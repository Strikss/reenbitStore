import React from "react";
import style from "./ContentActions.module.css";
import arrow from "../../../assets/images/arrow.svg";
import { Menu, Dropdown } from "antd";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";
import { SortBy } from "../../../enums/sortBy/sortBy";

const ContentActions: React.FC = () => {
  //HOOKS
  const sortBy = useAppSelector((state) => state.products.sortBy);
  const { setSortBy } = useAction();

  //DROPDOWN
  const menu = (
    <Menu>
      <Menu.Item key={"0"} onClick={() => setSortBy("")}>
        Featured
      </Menu.Item>
      <Menu.Item key={"1"} onClick={() => setSortBy(SortBy.PRICE_LOW)}>
        Price:Low to High
      </Menu.Item>
      <Menu.Item key={"2"} onClick={() => setSortBy(SortBy.PRICE_HIGH)}>
        Price:High to Low
      </Menu.Item>
      <Menu.Item key={"3"} onClick={() => setSortBy(SortBy.RATING)}>
        Rating
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.container}>
      <div className={style.left}>Sort by</div>
      <div className={style.right}>
        <Dropdown arrow overlay={menu} trigger={["click"]}>
          <button className={style.dropButton}>
            <a onClick={(e) => e.preventDefault()}>
              {sortBy ? sortBy : "Select"}
              <img className={style.arrow} src={arrow} alt="arrow" />
            </a>
          </button>
        </Dropdown>
      </div>
    </div>
  );
};

export default ContentActions;