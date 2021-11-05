import CustomPagination from "./pagination/CustomPagination";
import AllProductsList from "./allProductsList/AllProductsList";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";
import React, { useState } from "react";
import { Drawer } from "antd";
import filter from "../../../assets/images/filter.png";

const ContentBody: React.FC = () => {
  //Hooks
  const [visible, setVisible] = useState(false);

  //Functions
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.popOver}>
        <button className={style.button} onClick={showDrawer}>
          <img className={style.filter} src={filter} alt="arrow" />
          Filters
        </button>
        <Drawer
          title="Filter By:"
          placement="left"
          onClose={onClose}
          visible={visible}
          width="81vw"
        >
          <SideBar />
        </Drawer>
      </div>
      <div className={style.container}>
        <div className={style.sideBar}>
          <SideBar />
        </div>
        <AllProductsList />
      </div>
      <CustomPagination />
    </div>
  );
};

export default ContentBody;
