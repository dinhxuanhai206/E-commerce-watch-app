import React from "react";
import classNames from "classnames/bind";
import styles from "./Introduce.module.scss";
import BannerSlideShow from "../../components/BannerSlideShow/BannerSlideShow";
import images from "../../constant/imageHome";
const cx = classNames.bind(styles);

const bannerHome = [{ image: images.banner2 }];

const Introduce = () => {
  return (
    <div className={cx("wrapper")}>
      <BannerSlideShow dataBanner={bannerHome} />
      <div className={cx("container")}>
        <div className={cx("title")}>about us</div>
        <p>
          Almost every company has an introduction about their business, but to
          get a complete and effective introduction to conquer customers and
          partners, not all businesses can do it. Especially when the economy is
          still in crisis with many difficulties, increasing competition, a good
          introduction will be a significant factor to help your business prove
          its ability and strength. mine.
        </p>
        <p>
          Especially when the economy is still in crisis with many difficulties,
          increasing competition, a good introduction will be a significant
          factor to help your business prove its ability and strength. mine. In
          addition, with a professionally presented introduction, it will bring
          initial sympathy to the audience, which is an advantage that
          businesses should seize.there are often many different articles, but
          with the business introduction, there is only one.
        </p>
        <p>
          As for the product introduction, there are often many different
          articles, but with the business introduction, there is only one.
          Therefore, it is necessary to carefully invest in both content and
          form, because it partly shows the face of the whole business.
        </p>
        <p>
          Almost every company has an introduction about their business, but to
          get a complete and effective introduction to conquer customers and
          partners, not all businesses can do it.
        </p>
        <p>
          Almost every company has an introduction about their business, but to
          get a complete and effective introduction to conquer customers and
          partners, not all businesses can do it.
        </p>
        <p>
          Especially when the economy is still in crisis with many difficulties,
          increasing competition, a good introduction will be a significant
          factor to help your business prove its ability and strength. mine. In
          addition, with a professionally presented introduction, it will bring
          initial sympathy to the audience, which is an advantage that
          businesses should seize.
        </p>
      </div>
    </div>
  );
};
export default Introduce;
