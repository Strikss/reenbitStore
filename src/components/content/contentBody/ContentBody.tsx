import CustomPagination from "./pagination/CustomPagination";
import AllProductsList from "./allProductsList/AllProductsList";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";
import React from "react";

const ContentBody: React.FC = () => {
  return (
    <div className={style.mainContainer}>
      <div>hello</div>
      <div className={style.container}>
        <SideBar />

        <AllProductsList />
      </div>
      <CustomPagination />
    </div>
  );
};

export default ContentBody;
