import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/userActions";
import { toast, ToastContainer } from "react-toastify";
import Tippy from "@tippyjs/react";
import "react-toastify/dist/ReactToastify.css";
const cx = classNames.bind(styles);

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(32)
      .required("Password is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(formOptions);

  const { loading, error, userInfo, success } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(userLogin(data));
    navigate("/");
    if (success === true) {
      toast("login success");
    }
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("box")}>
        <form className={cx("form")} onSubmit={handleSubmit(submitForm)}>
          <h2>Sign in</h2>
          <div className={cx("inputBox")}>
            <input type="email" required="required" {...register("email")} />
            <span>Email</span>
            <i></i>
          </div>
          <p className={cx("valid-error-message")}>{errors.email?.message}</p>
          <div className={cx("inputBox")}>
            <input
              type="password"
              {...register("password")}
              required="required"
            />
            <span>Password</span>
            <i></i>
          </div>
          <p className={cx("valid-error-message")}>
            {errors.password?.message}
          </p>
          <div className={cx("links")}>
            <Link to="" className={cx("link")}>
              Forgot Password
            </Link>
            <Link to="/register" className={cx("link")}>
              Signup
            </Link>
          </div>
          <input type="submit" value="Login" className={cx("btn-submit")} />
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};
export default Login;
