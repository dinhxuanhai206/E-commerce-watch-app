import { useRef, useCallback, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./ModalMultiLanguage.module.scss";
import vietnam from "../../assets/images/vn.png";
import kingdom from "../../assets/images/au.png";

import {  useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

function LanguageModal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const { t, i18n } = useTranslation();
  const clickLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowModal(false);
  };

  return (
    showModal && (
      <div className={cx("wrapper")} ref={modalRef} onClick={closeModal}>
        <div className={cx("inner")}>
          <div className={cx("header")}>
            <div className={cx("title-1")}>Region and Language</div>
            <div className={cx("title-2")}>
                 {i18n.language === "vn" ? (
                <img src={vietnam} alt="btn-language" />
              ) : (
                <img src={kingdom} alt="btn-language" />
              )}
            </div>
          </div>
          <div className={cx("content")}>
            <span className={cx("content-label")}>
              {i18n.language === "vn" ? "Việt Nam" : "English"}
            </span>
            <div className={cx("content-inner")}>
              {i18n.language === "vn" ? (
                <img src={vietnam} alt="btn-language" />
              ) : (
                <img src={kingdom} alt="btn-language" />
              )}
              <div
                className={cx("malaysia-en")}
                onClick={() => clickLanguage("en")}
              >
                English
              </div>
              <div
                className={cx("malaysia-ms")}
                onClick={() => clickLanguage("vn")}
              >
                VietNam
              </div>
            </div>
          </div>
          <div className={cx("button-close")}></div>
        </div>
      </div>
    )
  );
}

export default LanguageModal;
