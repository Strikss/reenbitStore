import { Dropdown, Menu } from "antd";
import { useAppSelector } from "../../../hooks/selectorHook";
import { useAction } from "../../../hooks/useAction";
import style from "./SearchEngine.module.css";

const DropDownMenu = () => {
  //Hooks
  const { products, filterCategories } = useAppSelector(
    (state) => state.products
  );
  const { filterByCategories } = useAction();

  //Categories list
  const categories = Array();
  products.map((el) => {
    if (!categories.includes(el.category)) {
      categories.push(el.category);
    }
  });
  const dropDownList = categories.map((el, index) => (
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

  //functions
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
          </a>
        </button>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;
