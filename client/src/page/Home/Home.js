import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
import Products from "../../components/Products/Products";
import Categories from "../../components/Categories/Categories";

const cx = classNames.bind(styles);
const bannerHome = [
  { image: images.banner1 },
  { image: images.banner2 },
  { image: images.banner3 },
];
const Home = () => {
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <Categories />
      <div className={cx("name")}>outstanding</div>
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
    </div>
  );
};
export default Home;
