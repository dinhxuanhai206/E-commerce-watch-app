import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./FeedBack.module.scss";
import { AiOutlineApi } from "react-icons/ai";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataFeedBack } from "./dataFeedBack";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const Feedback = () => {
  const swiperRef = useRef();
  const { t, i18n } = useTranslation();

  return (
    <div className={cx("feedback-area")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("section-title")}>
            <div className={cx("wrap-title")}>
              {/* <div className={cx("title-hightlighter")}>
                <span className={cx("icon")}>
                  <AiOutlineApi />
                </span>
                <span className={cx("text-area")}>Testimonials</span>
              </div> */}
              <h2 className={cx("title")}>
                {i18n.language === "vn" ? (
                  <span>Người dùng phản hồi</span>
                ) : (
                  <span>Users Feedback</span>
                )}
              </h2>
            </div>
            <div className={cx("wrap-panigate-slide")}>
              <button onClick={() => swiperRef.current.swiper.slidePrev()}>
                <HiOutlineArrowNarrowLeft />
              </button>
              <button onClick={() => swiperRef.current.swiper.slideNext()}>
                <HiOutlineArrowNarrowRight />
              </button>
            </div>
          </div>
          <div className={cx("section-title")}>
            <Swiper
              ref={swiperRef}
              loop={true}
              spaceBetween={30}
              slidesPerView={3}
              freeMode={true}
              speed={1000}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {dataFeedBack.map((item, i) => (
                <SwiperSlide key={i} className={cx("wrap-slide")}>
                  <div className={cx("wrap-review")}>
                    <p className={cx("comment")}>
                      {i18n.language === "vn"
                        ? `“ ${item.commentVn} “`
                        : `“ ${item.comment} “`}
                    </p>
                  </div>
                  <div className={cx("wrap-media")}>
                    <div className={cx("wrap-media__thumbnail")}>
                      <img src={item.image} alt="testimonial image" />
                    </div>
                    <div className={cx("wrap-media__body")}>
                      <span className={cx("designation")}>Head Of Idea</span>
                      <h6 className={cx("title")}>{item.name}</h6>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
