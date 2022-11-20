import React from "react";
import classNames from "classnames/bind";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillMail,
} from "react-icons/ai";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const mainNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Shop",
    path: "/shop",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];
const aboutNav = [
  {
    display: "About Us",
    path: "/",
  },
  {
    display: "Privacy Policy",
    path: "/shop",
  },
  {
    display: "Terms & Conditions",
    path: "/blog",
  },
  {
    display: "Shipment Details",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className={cx("wrapper")}>
        <div className={cx("block-order")}>
          <div className={cx("title")}>10% OFF FIRST ORDER</div>
          <div className={cx("desc")}>
            Sign up for notifications to be the first to receive the news the
            company's latest promotions and exclusive member promotions
            Especially with the first order you will get 10% discount on any
            product.
          </div>
          <form>
            <p>Email</p>
            <div className={cx("block-mail")}>
              <div className={cx("mail-input")}>
                <input type="text" className={cx("input")} />
              </div>
              <div className={cx("btn-sign")}>
                <button className={cx("btn")}>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        <div className={cx("media-block")}>
          <div className={cx("media")}>
            <AiFillInstagram />
          </div>
          <div className={cx("media")}>
            <BsFacebook />
          </div>
          <div className={cx("media")}>
            <AiFillYoutube />
          </div>
          <div className={cx("media")}>
            <AiOutlineTwitter />
          </div>
        </div>
        <div className={cx("name")}>HSHOP WATCH AND JEWELRY</div>
        <div className={cx("text")}>
          Explore women's and men's watches to find yourself a complete set of
          timepieces.
        </div>
      </div>
      <div className={cx("footer-bottom")}>
        <div className={cx("container")}>
          <div className={cx("bottom")}>
            <div className={cx("about")}>
              <div className={cx("title")}>about</div>{" "}
              <div className={cx("nav")}>
                {aboutNav.map((item, index) => (
                  <div key={index} className={cx("")}>
                    <Link to={item.path}>
                      <span className={cx("menu-link")}>{item.display}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("menu")}>
              <div className={cx("title")}>menu</div>{" "}
              <div className={cx("nav")}>
                {mainNav.map((item, index) => (
                  <div key={index} className={cx("")}>
                    <Link to={item.path}>
                      <span className={cx("menu-link")}>{item.display}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className={cx("contact")}>
              <div className={cx("title")}>contact</div>
              <div className={cx("desc")}>
                Titanium watch is a reputable and quality watch sales address,
                our criteria is to sell good products at good prices, bringing
                absolute peace of mind to customers.
              </div>
              <div className={cx("location")}>
                <MdLocationOn /> A12, Đinh Tiên Hoàng, Q. Hoàn Kiếm, Hà Nội
              </div>
              <div className={cx("phone")}>
                <BsFillTelephoneFill style={{ fontSize: "12px" }} /> +84 353 432
                512
              </div>
              <div className={cx("phone")}>
                <AiFillMail style={{ fontSize: "14px" }} />{" "}
                dinhxuanhai206@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("copy")}>
        © Copyright 2021-2022 Hshop. Design Group14
      </div>
    </footer>
  );
};
export default Footer;
