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

const cx = classNames.bind(styles);


const Cart = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const products = useSelector((state) => state.cart);

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

  const submitForm = (data) => {
    console.log(data);
    navigate("/success", {
      state: {
        infoData: data,
        product: products,
      },
    });
    dispatch(clearCart());
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
                  {...register("phone")}
                  required="required"
                />
                <span>Phone</span>
                <i></i>
              </div>
              <div className={cx("subtotal-node")}>
                <span style={{ marginRight: "10px" }}>Subtotal:</span> $
                {products.cartTotalAmount}
              </div>
              <input
                type="submit"
                value="Submit"
                className={cx("btn-submit")}
              />
            </form>
          </div>
        </div>
      ): null}
      {products.cartItems.length === 0 ? (
        <div className={cx("wrapper")}>
          <div className={cx("title")}>Shopping Cart</div>
          <div className={cx("bb-10")}>Go Back Shop</div>
        </div>
      ) : (
        <div className={cx("block")}>
          <div className={cx("title")}>Shopping Cart</div>
          <div className={cx("title-block")}>
            <div className={cx("product")}>Product</div>
            <div className={cx("product-price")}>Price</div>
            <div className={cx("product-quantity")}>Quantity</div>
            <div className={cx("product-total")}>Total</div>
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
                      remove
                    </button>
                  </div>
                </div>
                <div className={cx("price")}>${item.price}</div>
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
                  $ {item.price * item.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className={cx("total-block")}>
            <div className={cx("clear")}>
              <button className={cx("btn-clear")} onClick={() => handleClear()}>
                Clear
              </button>
            </div>
            <div className={cx("subTotal-block")}>
              <div className={cx("subTotal")}>
                <div className={cx("subTotal-title")}>Subtotal:</div>
                <div className={cx("name")}>$ {products.cartTotalAmount}</div>
              </div>
              <button
                className={cx("btn-check")}
                onClick={() => setModal(true)}
              >
                CHECKOUT NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
