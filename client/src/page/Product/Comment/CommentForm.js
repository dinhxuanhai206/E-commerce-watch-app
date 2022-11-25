import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import { userRequest } from "../../../requestMethods";
import { useSelector } from "react-redux";

const cx = classNames.bind(styles);

const CommentForm = ({ setDataCmt, dataCmt }) => {
  const commentsRef = useRef(null);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [comment, setComment] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const postComment = async () => {
      try {
        const res = await userRequest.post("/comment/saveComment", {
          name: userInfo.username,
          body: comment,
        });
        dataCmt.push({ name: userInfo.username, body: comment })
      } catch (err) {
        console.log(err);
      }
    };
    postComment();
  };

  return (
    <div className={cx("wrapper")}>
      <div>
        <div className={cx("comment-input")}>
          <input
            ref={commentsRef}
            placeholder="text"
            type="text"
            className={cx("input")}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className={cx("btn-submit")} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default CommentForm;
