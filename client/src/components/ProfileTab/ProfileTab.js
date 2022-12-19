import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ProfileTab.module.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);
const profileData = [
  {
    title: "My Account",
    titleVn: "Tài Khoản Của Tôi",
    link: "account",
  },
  {
    title: "Purchase Order",
    titleVn: "Đơn Hàng Đã Mua",
    link: "purchase",
  },
];

const ProfileTab = () => {
  const [active, setActive] = useState(null);
  const { t, i18n } = useTranslation();
  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <div className={cx("profile-tab")}>
      <div className={cx("profile-info")}>
        <div className={cx("profile-image")}>
          <img
            src="https://anhdep123.com/wp-content/uploads/2021/05/anh-jisoo-blackpink.jpg"
            alt=""
            className={cx("img")}
          />
        </div>
        <div className={cx("profile-name")}>{userInfo.username}</div>
      </div>
      <div className={cx("profile-acccount")}>
        {profileData.map((item, index) => (
          <Link
            to={item.link}
            className={cx(active === index ? "item-active" : "item")}
            key={index}
            onClick={() => setActive(index)}
          >
            {i18n.language === "vn" ? item.titleVn : item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default ProfileTab;
