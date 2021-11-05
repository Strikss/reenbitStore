import { Dropdown, Menu } from "antd";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";
import style from "./SearchEngine.module.css";
import arrow from "../../../assets/images/arrow.svg";

const DropDownMenu = () => {
  //HOOKS
  const { products, filterCategories } = useAppSelector(
    (state) => state.products
  );
  const { filterByCategories } = useAction();

  //CATEGORIES LIST
  const categories = products.map((el) => el.category);
  const unicCategories = categories.filter(
    (value, index, self) => self.indexOf(value) === index
  );

  //DROP DOWN
  const dropDownList = unicCategories.map((el, index) => (
    <Menu.Item key={index + 1} onClick={() => setCategory(el)}>
      {el}
    </Menu.Item>
  ));
  const menu = (
    <Menu>
      <Menu.Item key={"0"} onClick={() => setCategory("")}>
        All categories
      </Menu.Item>
      {dropDownList}
    </Menu>
  );

  //FUNCTIONS
  const setCategory = (category: string) => {
    filterByCategories(category);
  };

  return (
    <div className={style.dropDown}>
      <Dropdown
        arrow
        overlay={menu}
        trigger={["click"]}
        overlayStyle={{ width: "140px" }}
      >
        <button className={style.dropButton}>
          <a onClick={(e) => e.preventDefault()}>
            {filterCategories ? filterCategories : "All categories"}
            <img className={style.arrow} src={arrow} alt="arrow" />
          </a>
        </button>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
