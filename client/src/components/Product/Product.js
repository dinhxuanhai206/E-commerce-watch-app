import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Product = ({ item }) => {
  const dispatch = useDispatch();
  const addCard = (item) => {
    dispatch(add(item));
  };
  return (
    <Link to={`/productdetail/${item._id}`} className={cx("item")} data-aos="zoom-in">
      <div className={cx("item-image")}>
        <img src={item.image} alt="" className={cx("image")} />
      </div>
      <div className={cx("name")}>{item.title}</div>
      <button
        style={{ backgroundColor: item.color }}
        className={cx("color-btn")}
      ></button>
      <div className={cx("color")}>{item.color}</div>
      <div className={cx("price")}>${item.price}</div>
      <div className={cx("link")}>
      </div>
    </Link>
  );
};
export default Product;
