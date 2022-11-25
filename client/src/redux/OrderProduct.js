import { createSlice } from "@reduxjs/toolkit";

export const OrderProductSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getOrderProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderProductSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteOrderProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderProductSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateOrderProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateOrderProductSuccess: (state, action) => {
      state.isFetching = false;
      state.orders[
        state.orders.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateOrderProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getOrderProductStart,
  getOrderProductSuccess,
  getOrderProductFailure,
  deleteOrderProductStart,
  deleteOrderProductSuccess,
  deleteOrderProductFailure,
  updateOrderProductStart,
  updateOrderProductSuccess,
  updateOrderProductFailure,
} = OrderProductSlice.actions;

export default OrderProductSlice.reducer;
