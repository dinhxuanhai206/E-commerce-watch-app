import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/userActions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const cx = classNames.bind(styles);

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { loading, error, userInfo, success } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(userLogin(data));
    navigate("/");
    if(success === true){
      toast("login success")
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
          <div className={cx("inputBox")}>
            <input type="text" {...register("password")} required="required" />
            <span>Password</span>
            <i></i>
          </div>
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
