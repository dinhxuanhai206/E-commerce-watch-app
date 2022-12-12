import React from "react";
import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
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

const Introduce = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <div className={cx("container")}>
        <div className={cx("title")}>
          {i18n.language === "vn" ? (
            <span>Về Chúng Tôi</span>
          ) : (
            <span>about us</span>
          )}
        </div>
        <p>
          {i18n.language === "vn" ? (
            <span>
              Hầu hết mọi công ty đều có phần giới thiệu về doanh nghiệp của
              mình, nhưng để có được một bài giới thiệu đầy đủ và hiệu quả để
              chinh phục khách hàng và đối tác thì không phải doanh nghiệp nào
              cũng làm được. Nhất là khi nền kinh tế đang còn khủng hoảng với
              nhiều khó khăn, cạnh tranh ngày càng gay gắt lời giới thiệu sẽ là
              yếu tố quan trọng giúp doanh nghiệp của bạn chứng minh khả năng và
              sức mạnh của nó. của tôi.
            </span>
          ) : (
            <span>
              {i18n.language === "vn" ? (
                <span>Về Chúng Tôi</span>
              ) : (
                <span>about us</span>
              )}{" "}
              Almost every company has an introduction about their business, but
              to get a complete and effective introduction to conquer customers
              and partners, not all businesses can do it. Especially when the
              economy is still in crisis with many difficulties, increasing
              competition, a good introduction will be a significant factor to
              help your business prove its ability and strength. mine.
            </span>
          )}
        </p>
        <p>
          {i18n.language === "vn" ? (
            <span>
              {" "}
              Nhất là trong bối cảnh nền kinh tế còn đang khủng hoảng với nhiều
              khó khăn, cạnh tranh ngày càng tăng, một lời giới thiệu tốt sẽ là
              một yếu tố giúp doanh nghiệp của bạn chứng tỏ khả năng và sức mạnh
              của mình. của tôi. Trong Ngoài ra, với phần mở đầu được trình bày
              chuyên nghiệp sẽ mang lại thiện cảm ban đầu với khán giả, đó là
              một lợi thế mà doanh nghiệp nên nắm bắt. thường có nhiều bài viết
              khác nhau nhưng với phần giới thiệu doanh nghiệp thì chỉ có một.
            </span>
          ) : (
            <span>
              {" "}
              Especially when the economy is still in crisis with many
              difficulties, increasing competition, a good introduction will be
              a significant factor to help your business prove its ability and
              strength. mine. In addition, with a professionally presented
              introduction, it will bring initial sympathy to the audience,
              which is an advantage that businesses should seize.there are often
              many different articles, but with the business introduction, there
              is only one.
            </span>
          )}
        </p>
        <p>
          {i18n.language === "vn" ? (
            <span>
              {" "}
              Hầu hết mọi công ty đều có phần giới thiệu về doanh nghiệp của
              mình, nhưng để có được một bài giới thiệu đầy đủ và hiệu quả để
              chinh phục khách hàng và đối tác thì không phải doanh nghiệp nào
              cũng làm được. Nhất là khi nền kinh tế đang còn khủng hoảng với
              nhiều khó khăn, cạnh tranh ngày càng gay gắt lời giới thiệu sẽ là
              yếu tố quan trọng giúp doanh nghiệp của bạn chứng minh khả năng và
              sức mạnh của nó. của tôi.
            </span>
          ) : (
            <span>
              As for the product introduction, there are often many different
              articles, but with the business introduction, there is only one.
              Therefore, it is necessary to carefully invest in both content and
              form, because it partly shows the face of the whole business.
            </span>
          )}
        </p>
        <p>
          {i18n.language === "vn" ? (
            <span>
              {" "}
              Hầu hết mọi công ty đều có phần giới thiệu về doanh nghiệp của
              mình, nhưng để có được một bài giới thiệu đầy đủ và hiệu quả để
              chinh phục khách hàng và đối tác thì không phải doanh nghiệp nào
              cũng làm được. Nhất là khi nền kinh tế đang còn khủng hoảng với
              nhiều khó khăn, cạnh tranh ngày càng gay gắt lời giới thiệu sẽ là
              yếu tố quan trọng giúp doanh nghiệp của bạn chứng minh khả năng và
              sức mạnh của nó. của tôi.
            </span>
          ) : (
            <span>
              As for the product introduction, there are often many different
              articles, but with the business introduction, there is only one.
              Therefore, it is necessary to carefully invest in both content and
              form, because it partly shows the face of the whole business.
            </span>
          )}
        </p>
      </div>
    </div>
  );
};
export default Introduce;
