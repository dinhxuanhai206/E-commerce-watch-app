import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import successImg from "../../assets/images/th.jpg";
const Success = () => {
  const { state } = useLocation();

  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = state.infoData;
  const cart = state.product;
  const userInfo = useSelector((state) => state.user.userInfo);
  const [orderId, setOrderId] = useState(null);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: userInfo._id,
          products: cart.cartItems.map((item) => ({
            productId: item._id,
            quantity: item.cartQuantity,
          })),
          amount: cart.cartTotalAmount,
          name: data.name,
          phone: data.phone,
          address: data.address,
          status: "processing",
          payment: "waiting for payment",
          customer: "check",
        });

        setOrderId(res.userInfo._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, userInfo]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <img src={successImg } alt=""/>
      </div>
      The order has been successfully created, please pay when receiving the
      goods
      <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
