import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import i18n from "../../i18next";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("container-wrapper")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
