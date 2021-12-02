import React from "react";
import style from "./Breadcrumbs.module.css";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router";
import { useAppSelector } from "../../hooks/selectorHook";
import { Routes } from "../../router/router";
import { matchPath } from "react-router";

const Breadcrumbs: React.FC = () => {
  //HOOKS
  const { products, currentID } = useAppSelector((state) => state.products);
  const { pathname } = useLocation();

  //FUNCTIONS
  const selectedProduct = products.find((prod) => prod.itemID === currentID);
  const getBreadcrumb = () => {
    const name = Routes.filter(({ path }) => {
      let currentRoute = matchPath(pathname, path);
      return currentRoute?.path === path;
    });
    if (selectedProduct) {
      return (
        <>
          <Breadcrumb.Item href="#">{name[0].breadcrumbName}</Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>{selectedProduct.name}</span>
          </Breadcrumb.Item>
        </>
      );
    } else if (name.length > 1) {
      return <Breadcrumb.Item>{name[1].breadcrumbName}</Breadcrumb.Item>;
    } else {
      return <Breadcrumb.Item>{name[0].breadcrumbName}</Breadcrumb.Item>;
    }
  };
  const breadCrumb = getBreadcrumb();

  return (
    <Breadcrumb className={style.container}>
      <Breadcrumb.Item>
        <HomeOutlined className={style.home} />
        <span>Homepage</span>
      </Breadcrumb.Item>
      {breadCrumb}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
