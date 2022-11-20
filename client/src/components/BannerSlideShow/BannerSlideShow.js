import React from "react";
import { Link } from "react-router-dom";
import styles from "./BannerSlideShow.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { AiFillNotification } from "react-icons/ai";

const cx = classNames.bind(styles);

BannerSlideShow.propTypes = {
  notification: PropTypes.string,
  dataBanner: PropTypes.array,
  ranking: PropTypes.array,
};

function BannerSlideShow(props) {
  const { notification, dataBanner, ranking } = props;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} ${cx("custom-pagination")}"></span>`;
    },
  };

  return (
    <div className={cx("wrapper")}>
      {dataBanner && dataBanner.length > 0 ? (
        <div className={cx("banner-slides")}>
          <Swiper
            pagination={pagination}
            centeredSlides={true}
            loop={true}
            speed={800}
            cssMode={true}
            modules={[Pagination, Autoplay]}
            className={cx("swiper")}
            // slidesPerView={1}
            autoplay={{
              // delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {dataBanner?.map((item, index) => (
              <SwiperSlide key={index} className={cx("swiper-slide")}>
                <Link to={item.link ? item.link : "#"}>
                  <img src={item.image} className={cx("img")} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {ranking && ranking.length > 0 ? (
            <div className="container">
              <div className={cx("ranking")}>Ranking</div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className={cx("no-data-banner")}>
          Warning: Can't data banner slides!. Please add data or remove
          component BannerSlideShow
        </div>
      )}
    </div>
  );
}

export default BannerSlideShow;
