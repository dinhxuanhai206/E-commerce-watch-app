import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./userActions";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const userToken = localStorage.getItem("userToken")
  ? JSON.parse(localStorage.getItem("userToken"))
  : null;
const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  accessToken: "",
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken"); // deletes token from storage
      localStorage.removeItem("userInfo"); // deletes token from storage
      state.loading = false;
      state.userInfo = null;
      state.accessToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
       // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.accessToken = payload.accessToken;
      state.success = true;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      // localStorage.setItem("accessToken", JSON.stringify(state.accessToken));
   
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
    },
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
