import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineContacts,
  AiOutlineCloseCircle,
  AiOutlineLogin,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userSlice";
import { toast } from "react-toastify";
import LanguageModal from "../../../components/ModalMultiLanguage/ModalMultiLanguage";
import vietnam from "../../../assets/images/vn.png";
import kingdom from "../../../assets/images/au.png";
import { useTranslation } from "react-i18next";
import ToggleLanguage from "../../../components/ToggleLanguage/ToggleLanguage";

const cx = classNames.bind(styles);

const mainNav = [
  {
    display: "HOME",
    displayVn: "TRANG CHỦ",
    path: "/",
  },
  {
    display: "INTRODUCE",
    displayVn: "GIỚI THIỆU",
    path: "/introduce",
  },
  {
    display: "CONTACT",
    displayVn: "LIÊN HỆ",
    path: "/contact",
  },
];
const mainNavMobile = [
  {
    display: "HOME",
    path: "/",
    icons: <FaHome className={cx("icon")} />,
  },
  {
    display: "INTRODUCE",
    path: "/introduce",
    icons: <HiOutlineShoppingBag className={cx("icon")} />,
  },
  {
    display: "CONTACT",
    path: "/contact",
    icons: <MdPermContactCalendar className={cx("icon")} />,
  },
  {
    display: "CART",
    path: "/cart",
    icons: <AiOutlineShoppingCart className={cx("icon")} />,
  },
];

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  const handleMenu = () => {
    setShow(!show);
    setShowUser(false);
  };

  return (
    <div className={cx("header")}>
      {show ? (
        <div className={cx("sidebar")}>
          <AiOutlineCloseCircle
            onClick={() => setShow(false)}
            className={cx("btn-close")}
          />
          <div className={cx("sidebar__menu")}>
            {mainNavMobile.map((item, index) => (
              <div
                className={cx("sidebar__menu-link")}
                key={index}
                onClick={() => setShow(false)}
              >
                <Link to={item.path} className={cx("link")}>
                  <span>{item.icons}</span>
                  {item.display}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className={cx("header-bottom")}>
        <div className="container">
          <div className={cx("nav")}>
            <Link to="/" className={cx("logo")}>
              HSHOP
            </Link>
            <div className={cx("menu-left")}>
              <div className={cx("menu")}>
                {mainNav.map((item, index) => (
                  <div key={index} className={cx("")}>
                    <Link to={item.path} className={cx("link")}>
                      {i18n.language === "vn" ? item.displayVn : item.display}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("right")}>
              {userInfo?.username ? (
                <div className={cx("nav-profile")}>
                  <div>{userInfo.username}</div>
                  <div className={cx("profile-block")}>
                    <Link to="/profile" className={cx("link-profile")}>
                      {i18n.language === "vn" ? (
                        <span>cá nhân</span>
                      ) : (
                        <span>Profile</span>
                      )}
                    </Link>
                  </div>
                </div>
              ) : (
                <Link to="/login" className={cx("sign")}>
                  {i18n.language === "vn" ? (
                    <span>Đăng Nhập</span>
                  ) : (
                    <span>Login</span>
                  )}
                </Link>
              )}
              <button
                className={cx("btn-logout")}
                onClick={() => handleLogout()}
              >
                {i18n.language === "vn" ? (
                  <span>Đăng Xuất</span>
                ) : (
                  <span>Logout</span>
                )}
              </button>

              <ToggleLanguage />

              {/* <div className={cx("btn-language")}>
                <img
                  src={i18n.language === "vn" ? vietnam : kingdom}
                  alt="btn-language"
                  onClick={() => setShowModal(true)}
                  className={cx("img-lan")}
                />
              </div>
              <LanguageModal {...{ showModal, setShowModal }} /> */}
              <Link to="/cart" className={cx("s-cart")}>
                <AiOutlineShoppingCart className={cx("shopping")} />
                <span className={cx("cart")}>{item.cartItems.length}</span>
              </Link>
            </div>
            <div className={cx("nav__mobile")}>
              <div className={cx("nav__mobile-content")}>
                <div className={cx("btn-language")}>
                  <img
                    src={i18n.language === "vn" ? vietnam : kingdom}
                    alt="btn-language"
                    onClick={() => setShowModal(true)}
                    className={cx("img-lan")}
                  />
                </div>
                <LanguageModal {...{ showModal, setShowModal }} />
                <div className={cx("content-user")}>
                  <FaUserCircle
                    className={cx("user-icons")}
                    onClick={() => setShowUser(!showUser)}
                  />
                  {showUser ? (
                    <div className={cx("user-name")}>
                      {userInfo ? (
                        <div className={cx("user-info")}>
                          {userInfo.username}
                        </div>
                      ) : (
                        <Link to="/login" className={cx("user_link")}>
                          Login
                        </Link>
                      )}
                      <div className={cx("user_link")} onClick={handleLogout}>
                        Logout
                      </div>
                      <Link to="/profile" className={cx("user_link")}>
                        Profile
                      </Link>
                    </div>
                  ) : null}
                </div>
                <div>
                  <FiMenu className={cx("menu-icons")} onClick={handleMenu} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
