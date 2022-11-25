import { userRequest } from "../requestMethods"
import {
  getOrderProductFailure,
  getOrderProductStart,
  getOrderProductSuccess,
  deleteOrderProductFailure,
  deleteOrderProductStart,
  deleteOrderProductSuccess,
  updateOrderProductFailure,
  updateOrderProductStart,
  updateOrderProductSuccess,
  addOrderProductFailure,
  addOrderProductStart,
  addOrderProductSuccess,
} from "./OrderProduct";

export const getOrder = async (id,dispatch) => {
  dispatch(getOrderProductStart());
  try {
    const res = await userRequest.get(`/orders/find/${id}`);
    dispatch(getOrderProductSuccess(res.data));
  } catch (err) {
    dispatch(getOrderProductFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderProductStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrderProductSuccess(id));
  } catch (err) {
    dispatch(deleteOrderProductFailure());
  }
};
