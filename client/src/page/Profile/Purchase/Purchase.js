import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Purchase.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder } from "../../../redux/OrderAction";
const cx = classNames.bind(styles);

const Purchase = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const userInfo = useSelector((state) => state.user.userInfo);
  const orderProduct = useSelector((state) => state.order.orders);
  console.log(orderProduct);
  useEffect(() => {
    getOrder(userInfo._id, dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteOrder(id, dispatch);
  };

  const purchaseTab = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "waiting for goods",
    },
    {
      id: 3,
      title: "delivery",
    },
    {
      id: 4,
      title: "delivered",
    },
    {
      id: 5,
      title: "cancelled",
    },
    {
      id: 6,
      title: "Returns",
    },
  ];
  console.log(active);

  return (
    <div className={cx("wrapper")}>
      {/* {purchaseTab.map((item) => (
        <div className={cx("item-tab")} key={item.id}>
          <div
            className={cx("item-tab-title")}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </div>
        </div>
      ))}
      {active === 1 ? (
        orderProduct.map((product) => (
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
          </div>
        ))
      ) : active === 2 ? (
        <div className={cx("name")}>
          
        </div>
      ) : active === 3 ? (
        <div className={cx("name")}></div>
      ) : active === 4 ? (
        <div className={cx("name")}></div>
      ) : active === 5 ? (
        <div className={cx("name")}></div>
      ) : (
        <div className={cx("name")}></div>
      )} */}



      <div className={cx("product-title")}>Your order</div>
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
            {product.status === "transport" ? (
              <div className={cx("success-title")}>
                Your order will be shipped within 3 to 4 days, you will receive
                it, please wait for payment
              </div>
            ) : (
                <button
                  className={cx("btn-cancel")}
                  onClick={() => handleDelete(product._id)}
                >
                  cancel order
                </button>
              ) && product.status === "success" ? (
              <div className={cx("success-title")}>
               Order completed
              </div>
            ) : (
              <button
                className={cx("btn-cancel")}
                onClick={() => handleDelete(product._id)}
              >
                cancel order
              </button>
            ) && product.status === "failed order" ? (
              <div className={cx("success-title")}>
               Order Cancel
              </div>
            ) : (
              <button
                className={cx("btn-cancel")}
                onClick={() => handleDelete(product._id)}
              >
                cancel order
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Purchase;
