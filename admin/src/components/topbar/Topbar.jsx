import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";
export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hshop Admin</span>
        </div>
        <div className="topRight">
          {/* <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>*/}
          <img
            src="https://anhdep123.com/wp-content/uploads/2021/05/anh-jisoo-blackpink.jpg"
            alt=""
            className="topAvatar"
          />
          <div className="topbarIconContainer" style={{color: "#cdbc7a", fontWeight: "700", marginLeft: "10px"}}>
            {user.username}
          </div>
        </div>
      </div>
    </div>
  );
}
