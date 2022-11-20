import React from "react";
import classNames from "classnames/bind";
import styles from "./LayoutSign.module.scss";
import Navbar from "../components/Navbar/Navbar";

const cx = classNames.bind(styles);

const LayoutSign = ({children}) => {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("container-wrapper")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};
export default LayoutSign;
