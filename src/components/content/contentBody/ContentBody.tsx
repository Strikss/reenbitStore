import AllProductsList from "./allProductsList/AllProductsList";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";

const ContentBody = () => {
  return (
    <div className={style.container}>
      <div className={style.sideBar}>
        <SideBar />
      </div>
      <div className={style.products}>
        <AllProductsList />
      </div>
    </div>
  );
};

export default ContentBody;
