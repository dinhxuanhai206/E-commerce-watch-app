import React from "react";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import { Outlet } from "react-router-dom";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx("profile")}>
      <div className={cx("profile-wrapper","container")}>
        <div className={cx("profile-left")}>
          <ProfileTab />
        </div>
        <div className={cx("profile-right")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Profile;
