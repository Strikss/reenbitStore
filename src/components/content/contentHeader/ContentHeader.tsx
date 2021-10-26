import style from "./ContentHeader.module.css";

interface Prop {
  totalProductCount: number;
}

const ContentHeader = ({ totalProductCount }: Prop) => {
  return (
    <div className={style.titleContainer}>
      <h1 className={style.title}>All Products</h1>
      <div>
        <span className={style.totalCount}>{totalProductCount}</span>
        <span className={style.products}>Products</span>
      </div>
    </div>
  );
};

export default ContentHeader;
