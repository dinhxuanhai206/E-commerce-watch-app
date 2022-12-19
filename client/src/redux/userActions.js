import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5500/api/auth/login",
        { email, password },
        config
      );
      // localStorage.setItem("userToken", data.userToken);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.status) {
        return rejectWithValue(error.response.data.status);
      } else {
        return rejectWithValue(error.status);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5500/api/auth/register",
        { username, email, password },
        config
      );
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
