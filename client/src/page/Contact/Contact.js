import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import { FiSend } from "react-icons/fi";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
const cx = classNames.bind(styles);
const bannerHome = [{ image: images.banner2 }];
const Contact = () => {
  return (
    <div className={cx("contact")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <div className={cx("contact-wrapper", "container")}>
        <div className={cx("wrap-head")}>
          <h5 className={cx("sub-title")}>CONTACT US</h5>
          <h2 className={cx("title")}>
            Let's ask your questions<br></br>Need help?
          </h2>
          <div className={cx("divider")}></div>
        </div>
        <div className={cx("wrapper")}>
          <div className={cx("contact-us")} data-aos="fade-right">
            <div className={cx("address-items")}>
              <div className={cx("item")}>
                <h4 className={cx("title")}>Office Location</h4>
                <div className={cx("info")}>
                  <p>
                    628C Xa Lo Ha Noi,
                    <br />
                    Thu Duc, HCM City
                    <br /> W1U 3BW
                  </p>
                </div>
              </div>
              <div className={cx("item")}>
                <h4 className={cx("title")}>Contact Info</h4>
                <div className={cx("info")}>
                  <p>
                    Phone: <span>+44-20-7328-4499</span>
                  </p>
                  <p>
                    Fax: <span>+44-20-7328-4499</span>
                  </p>
                  <p>
                    Email: <span> info@digilab.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("form-questions")} data-aos="fade-left">
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
