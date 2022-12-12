import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FiSend } from "react-icons/fi";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
import { useTranslation } from "react-i18next";
const cx = classNames.bind(styles);
const bannerHome = [
  {
    image: images.banner1,
    title: "LOVE GIFT MONTH FOR EVERY CUSTOMER",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
    desc: "10% OFF ",
    text: " ANY TWO PRODUCTS",
    textVn: "VỚI 2 SẢN PHẨM BẤT KÌ",
  },
  {
    image: images.banner2,
    title: "LOVE GIFT MONTH FOR EVERY CUSTOMER",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
    desc: "10% OFF ",
    text: " ANY TWO PRODUCTS",
    textVn: "VỚI 2 SẢN PHẨM BẤT KÌ",
  },
  {
    image: images.banner3,
    title: "LOVE GIFT MONTH FOR EVERY CUSTOMER",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
    desc: "10% OFF ",
    text: " ANY TWO PRODUCTS",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
  },
];
const Contact = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={cx("contact")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <div className={cx("contact-wrapper", "container")}>
        <div className={cx("wrap-head")}>
          <h5 className={cx("sub-title")}>
            {i18n.language === "vn" ? (
              <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
            ) : (
              <span>CONTACT US</span>
            )}
          </h5>
          <h2 className={cx("title")}>
            {i18n.language === "vn" ? (
              <span>
                Hãy đặt câu hỏi của bạn<br></br>Bạn cần trợ giúp?
              </span>
            ) : (
              <span>
                Let's ask your questions<br></br>Need help?
              </span>
            )}
          </h2>
          <div className={cx("divider")}></div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("contact-us")} data-aos="fade-right">
            <div className={cx("address-items")}>
              <div className={cx("item")}>
                <h4 className={cx("title")}>
                  {" "}
                  {i18n.language === "vn" ? (
                    <span>Địa Chỉ Công Ty</span>
                  ) : (
                    <span>Office Location</span>
                  )}
                </h4>
                <div className={cx("info")}>
                  <p>
                    A12, Đinh Tiên Hoàng
                    <br />
                    Q. Hoàn Kiếm, Hà Nội
                    <br /> W1U 3BW
                  </p>
                </div>
              </div>
              <div className={cx("item")}>
                <h4 className={cx("title")}>
                  {i18n.language === "vn" ? (
                    <span>Thông Tin Liên Hệ</span>
                  ) : (
                    <span> Contact Info</span>
                  )}
                </h4>
                <div className={cx("info")}>
                  <p>
                    Phone: <span>+84 353 432 512</span>
                  </p>
                  <p>
                    Email: <span>dinhxuanhai@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("form-questions")} data-aos="fade-up">
            <form className={cx("form")}>
              <div className={cx("input-name")}>
                <div className={cx("form-group")}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className={cx("form-control")}
                  />
                </div>
              </div>
              <div className={cx("input-block")}>
                <div className={cx("email")}>
                  <div className={cx("form-group")}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className={cx("form-control")}
                    />
                  </div>
                </div>
                <div className={cx("phone")}>
                  <div className={cx("form-group")}>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      className={cx("form-control")}
                    />
                  </div>
                </div>
              </div>
              <div className={cx("text-era")}>
                <div className={cx("form-group", "comment")}>
                  <textarea
                    type="text"
                    name="comments"
                    placeholder="Tell Us About Project*"
                    className={cx("form-control")}
                  />
                </div>
              </div>
              <button type="submit" className={cx("btn-submit")}>
                Send message <FiSend className={cx("send-icons")} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
