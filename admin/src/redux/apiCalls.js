import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  addUserFailure,
  addUserStart,
  addUserSuccess,
} from "./userCallRedux";
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

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/product");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
     const res = await userRequest.delete(`/product/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/product`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};


//////////////////
export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users/all");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
     const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
// ///////////////////////
export const getOrder = async (dispatch) => {
  dispatch(getOrderProductStart());
  try {
    const res = await userRequest.get("/orders");
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
export const updateOrder = async (id, status, dispatch) => {
  dispatch(updateOrderProductStart());
  try {
     const res = await userRequest.put(`/orders/${id}`);
    dispatch(updateOrderProductSuccess(id, status));
  } catch (err) {
    dispatch(updateOrderProductFailure());
  }
};
