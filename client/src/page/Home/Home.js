import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";
import bg from "../../assets/images/bgdep.png";
import logo from "../../assets/images/Watch Hshop.png";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Feedback from "./FeedBack/FeedBack";

const cx = classNames.bind(styles);
const bannerHome = [
  {
    image: images.banner1,
    title: "MONTH OF LOVE GIFTS",
    desc: "10% OFF ",
    text: " VỚI 2 SẢN PHẨM BẤT KỲ",
  },
  {
    image: images.banner2,
    title: "MONTH OF LOVE GIFTS",
    desc: "10% OFF ",
    text: " VỚI 2 SẢN PHẨM BẤT KỲ",
  },
  { image: images.banner3 },
];
const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <Categories />
      <div className={cx("name")}>collection best sellers</div>
      <Products />
      <div className={cx("banner")}>
        <div className={cx("banner-title")}>
          <h1>QUADRO</h1>
          <h2>STUDIO</h2>
          <span>
            <p>SQUARE DIAL WATCH COLLECTION COLLECTION</p>
            <p className={cx("p1")}>INSPIRATION OF THE '70s</p>
          </span>
        </div>
      </div>
      <div className={cx("container")}>
        <div
          className={cx("story")}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className={cx("logo")}>HSHOP</div>
          <p className={cx("story-title")}>THE STORY OF HSHOP</p>
          <p className={cx("story-text")}>
            At the end of 1980, 2 guys who are passionate about Startup and
            Watches decided to establish dw, but from the very beginning, we
            knew that: Dw was born with a bigger mission, not stopping as a
            co-commerce company. . We want to bring an inspiration, a change in
            thinking, in thinking and what we call experiences for young people.
          </p>
          <div className={cx("image")}>
            <img src={bg} alt="" className={cx("img")} />
          </div>
        </div>
      </div>
      <Feedback/>
      <ScrollToTop />
    </div>
  );
};
export default Home;
