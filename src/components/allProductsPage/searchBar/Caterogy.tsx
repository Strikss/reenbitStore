import s from "./SearchBar.module.css";
import searchLoop from "./../../../generalStuff/searchLoop.png";
import dropDown from "./../../../generalStuff/dropDown.png";

const Caterogy = () => {
  return (
    <div>
      <div className={s.searchBarWrapper}>
        <div className={s.formGroup}>
          <div className={s.dropDown}>
            <div className={s.defaultOption}>
              All categories <img src={dropDown} alt="dropDown" />
            </div>
            <div className={s.dropDownList}>
              <ul>
                <li>category name</li>
                <li>category name</li>
                <li>category name</li>
                <li>category name</li>
              </ul>
            </div>
          </div>
          <div className={s.search}>
            <input
              type="text"
              className={s.searchInput}
              placeholder="Search Products, categories ..."
            />
          </div>
          <button className={s.btn} type="submit">
            <img className={s.searchLoop} src={searchLoop} alt="img here" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Caterogy;
