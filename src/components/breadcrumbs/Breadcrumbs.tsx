import React from "react";
import style from "./Breadcrumbs.module.css";
import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory, useLocation, useParams } from "react-router";

const Breadcrumbs: React.FC = () => {
  const location = useParams();
  const notLocation = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(notLocation);
  console.log(history);

  return (
    <Breadcrumb className={style.container}>
      <Breadcrumb.Item href="/#/">
        <HomeOutlined />
        <span>Homepage</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="">
        <UserOutlined />
        <span>Application List</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
