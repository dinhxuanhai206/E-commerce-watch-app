import React from "react";
import classNames from "classnames/bind";
import styles from "./Describe.module.scss";

const cx = classNames.bind(styles);

const Describe = ({product}) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("bottom")}>
        {/* <div className={cx("desc-title")}>describe</div> */}
        {/* <div className={cx("desc")}>{product.desc}</div> */}
        <div className={cx("block")}>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Thickness</div>
            <div className={cx("prop")}>{product.thickness}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Color</div>
            <div className={cx("prop")}>{product.color}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Move</div>
            <div className={cx("prop")}>{product.Move}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Material</div>
            <div className={cx("prop")}>{product.Material}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Strap</div>
            <div className={cx("prop")}>{product.Strap}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>SwapStraps</div>
            <div className={cx("prop")}>{product.SwapStraps}</div>
          </div>
          <div className={cx("thickness")}>
            <div className={cx("thickness-name")}>Waterproof</div>
            <div className={cx("prop")}>{product.Waterproof}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Describe;
