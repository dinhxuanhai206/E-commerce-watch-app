import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Purchase.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder } from "../../../redux/OrderAction";
const cx = classNames.bind(styles);

const Purchase = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const orderProduct = useSelector((state) => state.order.orders);
  console.log(orderProduct);
  useEffect(() => {
    getOrder(userInfo._id, dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx('product-title')}>
      Your order
      </div>
      <div className={cx("product-items")}>
        {orderProduct.map((product) => (
          <div className={cx("product")} key={product._id}>
            {product.products.map((item, index) => (
              <div className={cx("item")} key={index}>
                <p className={cx("item-id")}>
                <span> Product_id:</span> {item._id}{" "}
                  <span className={cx("item-quantity")}>
                    Quantity: {item.quantity}
                  </span>
                </p>
              </div>
            ))}
            <div className={cx("product-name")}>
              <span> Amount :</span> ${product.amount}
            </div>
            <div className={cx("product-name")}>
              <span>Orderer's name : </span> {product.name}
            </div>
            <div className={cx("product-name")}>
              <span> Phone :</span> {product.phone}
            </div>
            <div className={cx("product-name")}>
              <span> Address : </span> {product.address}
            </div>
            <button className={cx("btn-cancel")} onClick={()=>handleDelete(product._id)}>cancel order</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Purchase;
