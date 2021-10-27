import AllProductsList from "./allProductsList/AllProductsList";
import style from "./ContentBody.module.css";
import SideBar from "./sideBar/SideBar";

const ContentBody = () => {
  return (
    <div className={style.container}>
      <SideBar />
      <AllProductsList />
    </div>
  );
};

export default ContentBody;
