import CustomPagination from "./pagination/CustomPagination";
import AllProductsList from "./allProductsList/AllProductsList";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";
import React from "react";
import { Popover, Button } from "antd";

const ContentBody: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.popOver}>
        <Popover placement="right" content={SideBar} trigger="click">
          <Button>Filters</Button>
        </Popover>
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
