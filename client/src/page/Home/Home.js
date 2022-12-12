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
    image: images.banner3,
    title: "LOVE GIFT MONTH FOR EVERY CUSTOMER",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
    desc: "10% OFF ",
    text: " ANY TWO PRODUCTS",
    titleVn: "THÁNG QUÀ TẶNG YÊU THƯƠNG ",
  },
  
];
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <Categories />
      <div className={cx("name")}>
        {i18n.language === "vn" ? (
          <span>Bộ sưu tập bán chạy</span>
        ) : (
          <span>collection best sellers</span>
        )}
      </div>
      <Products />
      <div className={cx("banner")}>
        <div className={cx("banner-title")}>
          <h1>
            {i18n.language === "vn" ? (
              <span>BỘ SƯU TẬP</span>
            ) : (
              <span>SQUADRO</span>
            )}
          </h1>
          <h2>
            {i18n.language === "vn" ? (
              <span>MỚI NHẤT</span>
            ) : (
              <span>STUDIO</span>
            )}
          </h2>
          <span>
            <p>
              {i18n.language === "vn" ? (
                <span>BỘ SƯU TẬP ĐỒNG HỒ MẶT VUÔNG</span>
              ) : (
                <span>SQUARE DIAL WATCH COLLECTION COLLECTION</span>
              )}
            </p>
            <p className={cx("p1")}>
              {i18n.language === "vn" ? (
                <span>CẢM HỨNG CỦA THẬP KỲ 70</span>
              ) : (
                <span>INSPIRATION OF THE '70s</span>
              )}
            </p>
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
          <p className={cx("story-title")}>
            {i18n.language === "vn" ? (
              <span>LỊCH SỬ HÌNH THÀNH SHOP</span>
            ) : (
              <span>THE STORY OF HSHOP</span>
            )}
          </p>
          <p className={cx("story-text")}>
            {i18n.language === "vn" ? (
              <span>
                Cuối năm 2022, 4 chàng trai đam mê Khởi nghiệp và Watches quyết
                định thành lập dw, nhưng ngay từ đầu, chúng tôi biết rằng: Dw ra
                đời với sứ mệnh lớn lao hơn, không dừng lại ở vai trò công ty
                đồng thương mại. . Chúng tôi mong muốn mang đến một nguồn cảm
                hứng, một sự thay đổi trong tư duy, trong suy nghĩ và cái mà
                chúng tôi gọi là trải nghiệm cho các bạn trẻ.
              </span>
            ) : (
              <span>
                {" "}
                At the end of 2022, 4 guys who are passionate about Startup and
                Watches decided to establish dw, but from the very beginning, we
                knew that: Dw was born with a bigger mission, not stopping as a
                co-commerce company. . We want to bring an inspiration, a change
                in thinking, in thinking and what we call experiences for young
                people.
              </span>
            )}
          </p>
          <div className={cx("image")}>
            <img src={bg} alt="" className={cx("img")} />
          </div>
        </div>
      </div>
      <Feedback />
      <ScrollToTop />
    </div>
  );
};
export default Home;
