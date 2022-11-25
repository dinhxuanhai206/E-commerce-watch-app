import React from "react";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);


const fillterButton = [
  {
    display: "All",
    cat: "all"
  },
  {
    display: "Men's Watch",
    cat: "men"
  },
  {
    display: "Ladies Watches",
    cat: "women"
  },
  {
    display: "Collection",
    cat: "collection"
  },
];


const Categories = () => {
  
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        {fillterButton.map((item, index) => (
          <Link to={`/product/${item.cat}`} className={cx("title")} key={index}>
            <button className={cx("btn")}>{item.display}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categories;
