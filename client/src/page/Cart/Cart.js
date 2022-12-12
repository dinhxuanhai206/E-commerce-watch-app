import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  clearCart,
  decrease,
  remove,
  getTotals,
} from "../../redux/cartSlice";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const cx = classNames.bind(styles);

const Cart = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const products = useSelector((state) => state.cart);
  const userInfo = useSelector((state) => state.user.userInfo);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTotals());
  }, [products, dispatch]);

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleDecrease = (item) => {
    dispatch(decrease(item));
  };
  const handleIncrease = (item) => {
    dispatch(add(item));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const submitForm = (data) => {
    if (userInfo) {
      navigate("/success", {
        state: {
          infoData: data,
          product: products,
        },
      });
      dispatch(clearCart());
    } else {
      navigate("/login");
    }
  };
  return (
    <div className={cx("container")}>
      {modal ? (
        <div className={cx("wrapper-success")}>
          <div className={cx("close")} onClick={() => setModal(false)}>
            <AiOutlineCloseCircle
              style={{ fontSize: "30px", color: "white", cursor: "pointer" }}
            />
          </div>
          <div className={cx("box")}>
            <form className={cx("form")} onSubmit={handleSubmit(submitForm)}>
              <h2>Customer Information</h2>
              <div className={cx("inputBox")}>
                <input type="text" required="required" {...register("name")} />
                <span>Name</span>
                <i></i>
              </div>
              <div className={cx("inputBox")}>
                <input
                  type="text"
                  required="required"
                  {...register("address")}
                />
                <span>Address</span>
                <i></i>
              </div>
              <div className={cx("inputBox")}>
                <input
                  type="number"
                  {...register("phone", {
                    required: true,
                    pattern: /^\d{10}$/,
                  })}
                  required="required"
                />
                <span>Phone</span>
                <i></i>
              </div>
              <div className={cx("subtotal-node")}>
                <span style={{ marginRight: "10px" }}>Subtotal:</span>{" "}
                {i18n.language === "vn" ? (
                  <span>
                    {(products.cartTotalAmount * 23000).toLocaleString(
                      "it-IT",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )}
                  </span>
                ) : (
                  <span>$ {products.cartTotalAmount}</span>
                )}
              </div>
              <input
                type="submit"
                value="Submit"
                className={cx("btn-submit")}
              />
            </form>
          </div>
        </div>
      ) : null}
      {products.cartItems.length === 0 ? (
        <div className={cx("wrapper")}>
          <div className={cx("title")}>
            {" "}
            {i18n.language === "vn" ? (
              <span>Giỏ hàng</span>
            ) : (
              <span>Shopping Cart</span>
            )}
          </div>
          <Link to="/" className={cx("bb-10")}>
            Go Back Shop
          </Link>
        </div>
      ) : (
        <div className={cx("wrapper-cart")}>
          <div className={cx("title")}>
            {i18n.language === "vn" ? (
              <span>Giỏ hàng</span>
            ) : (
              <span>Shopping Cart</span>
            )}
          </div>
          <div className={cx("title-block")}>
            <div className={cx("product")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>Sản Phẩm</span>
              ) : (
                <span>Product</span>
              )}
            </div>
            <div className={cx("product-price")}>
              {" "}
              {i18n.language === "vn" ? <span>Giá</span> : <span>Price</span>}
            </div>
            <div className={cx("product-quantity")}>
              {" "}
              {i18n.language === "vn" ? (
                <span>Số Lượng</span>
              ) : (
                <span>Quantity</span>
              )}
            </div>
            <div className={cx("product-total")}>
              {i18n.language === "vn" ? (
                <span>Tổng Tiền</span>
              ) : (
                <span>Total</span>
              )}
            </div>
          </div>
          <div className={cx("cart-block")}>
            {products.cartItems.map((item, index) => (
              <div className={cx("item")} key={index}>
                <div className={cx("item-block")}>
                  <div className={cx("image")}>
                    <img src={item.image} alt="" className={cx("img")} />
                  </div>
                  <div className={cx("name-right")}>
                    <div className={cx("name")}>{item.title}</div>
                    <button
                      onClick={() => handleRemove(item)}
                      className={cx("btn-remove")}
                    >
                      {i18n.language === "vn" ? (
                        <span>Thu hồi</span>
                      ) : (
                        <span>Remove</span>
                      )}
                    </button>
                  </div>
                </div>
                <div className={cx("price")}>
                  {" "}
                  {i18n.language === "vn" ? (
                    <span>
                      {(item.price * 23000).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  ) : (
                    <span>${item.price}</span>
                  )}
                </div>
                <div className={cx("quantity")}>
                  <button
                    className={cx("btn")}
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <div className={cx("count")}>{item.cartQuantity}</div>
                  <button
                    className={cx("btn")}
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
                <div className={cx("total")}>
                  {i18n.language === "vn" ? (
                    <span>
                      {(item.price * 23000 * item.cartQuantity).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </span>
                  ) : (
                    <span>${item.price * item.cartQuantity}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={cx("total-block")}>
            <div className={cx("clear")}>
              <button className={cx("btn-clear")} onClick={() => handleClear()}>
                {i18n.language === "vn" ? (
                  <span>Xóa hết</span>
                ) : (
                  <span>Clear</span>
                )}
              </button>
            </div>
            <div className={cx("subTotal-block")}>
              <div className={cx("subTotal")}>
                <div className={cx("subTotal-title")}>
                  {i18n.language === "vn" ? (
                    <span>Tổng Cộng:</span>
                  ) : (
                    <span>Subtotal:</span>
                  )}
                </div>
                <div className={cx("name")}>
                  {i18n.language === "vn" ? (
                    <span>
                      {(products.cartTotalAmount * 23000).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </span>
                  ) : (
                    <span>$ {products.cartTotalAmount}</span>
                  )}
                </div>
              </div>
              <button
                className={cx("btn-check")}
                onClick={() => setModal(true)}
              >
                {i18n.language === "vn" ? (
                  <span>THANH TOÁN</span>
                ) : (
                  <span>CHECKOUT NOW</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
