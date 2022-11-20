import React, { useEffect, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/userSlice";

const cx = classNames.bind(styles);

const mainNav = [
  {
    display: "HOME",
    path: "/",
  },
  {
    display: "INTRODUCE",
    path: "/introduce",
  },
  {
    display: "BLOG",
    path: "/blog",
  },
  {
    display: "CONTACT",
    path: "/contact",
  },
];

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const item = useSelector((state) => state.cart);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={cx("header")}>
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
                      {item.display}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("right")}>
              {/* <Link to="/login" className={cx("sign")}>
                Sign in
              </Link> */}
              {userInfo?.username ? (
                <div className={cx("name")}>{userInfo.username}</div>
              ) : (
                <Link to="/login" className={cx("sign")}>
                  Sign in
                </Link>
              )}
              <button
                className={cx("btn-logout")}
                onClick={() => handleLogout()}
              >
                Logout
              </button>
              <Link to="/cart" className={cx("s-cart")}>
                <AiOutlineShoppingCart className={cx("shopping")} />
                <span className={cx("cart")}>{item.cartItems.length}</span>
              </Link>
            </div>
            <FiMenu className={cx("menu-icons")} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
