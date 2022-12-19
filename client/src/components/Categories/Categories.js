import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import { Link } from "react-router-dom";
import catoimg from "../../assets/images/all.jpg";
import catoimg1 from "../../assets/images/man.jpg";
import catoimg2 from "../../assets/images/women.jpg";
import catoimg3 from "../../assets/images/colection.jpg";
import { HiArrowRight } from "react-icons/hi";
import { MediaQueryContext } from "../../context/MediaQueryContext";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const fillterButton = [
  {
    display: "All",
    displayVn: "Tất Cả",
    cat: "all",
  },
  {
    display: "Men's Watch",
    displayVn: "Đồng Hồ Nam",
    cat: "men",
  },
  {
    display: "Ladies Watches",
    displayVn: "Đồng Hồ Nữ",
    cat: "women",
  },
  {
    display: "Collection",
    displayVn: "Bộ Sưu Tập",
    cat: "collection",
  },
];
const fillterButtonMobile = [
  {
    display: "All",
    displayVn: "Tất Cả",
    cat: "all",
    img: catoimg,
  },
  {
    display: "Men's Watch",
    displayVn: "Đồng Hồ Nam",
    cat: "men",
    img: catoimg1,
  },
  {
    display: "Ladies Watches",
    displayVn: "Đồng Hồ Nữ",
    cat: "women",
    img: catoimg2,
  },
  {
    display: "Collection",
    displayVn: "Bộ Sưu Tập",
    cat: "collection",
    img: catoimg3,
  },
];

const Categories = () => {
  const breakpoint = useContext(MediaQueryContext);
  const { t, i18n } = useTranslation();

  return (
    <div className={cx("container")}>
      {breakpoint.mobile ? (
        <div className={cx("wrapper")}>
          {fillterButtonMobile.map((item, index) => (
            <Link
              to={`/product/${item.cat}`}
              className={cx("link-item")}
              key={index}
            >
              <div className={cx("link-img")}>
                <img src={item.img} alt="" className={cx("image")} />
                <div className={cx("link-title")}>
                  <div className={cx("title")}>{i18n.language === "vn"? item.displayVn:  item.display}</div>
                  <div className={cx("")}>
                    <HiArrowRight className={cx("right-icons")} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={cx("wrapper-per")}>
          {fillterButtonMobile.map((item, index) => (
             <Link
             to={`/product/${item.cat}`}
             className={cx("link-per")}
             key={index}
           >
             <div className={cx("link-img-per")}>
               <img src={item.img} alt="" className={cx("image-per")} />
               <div className={cx("link-title-per")}>
                 <div className={cx("title-per")}>{i18n.language === "vn"? item.displayVn : item.display}</div>
                 <div className={cx("")}>
                   <HiArrowRight className={cx("right-icons-per")} />
                 </div>
               </div>
             </div>
           </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Categories;
