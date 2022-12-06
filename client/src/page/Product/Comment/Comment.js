import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
import { userRequest } from "../../../requestMethods";
import CommentForm from "./CommentForm";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

const cx = classNames.bind(styles);

const Comment = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [data, setData] = useState([]);
  const handleDelete = (id) => {
    const postComment = async () => {
      try {
        const res = await userRequest.delete(`/comment/${id}`);
      } catch (err) {
        console.log(err);
      }
    };
    postComment();
  };

  useEffect(() => {
    const fetchComment = async () => {
      try {
        const res = await userRequest.get("/comment");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchComment();
  }, [data]);


  return (
    <div className={cx("wrapper")}>
      {/* <div className={cx("comment-title")}>Users Comment</div> */}
      <div className={cx("comment-content")}>
        {data.map((item, i) => (
          <div className={cx("comment-text")} key={i}>
            <div className={cx("comment-auth")}>
              {item.name}{" "}
              <span className={cx("comment-time")}>
                {format(item.createdAt)}
              </span>
            </div>
            <div className={cx("comment-desc")}>{item.body}</div>
            <div className={cx("btn-block")}>
             <button onClick={()=>handleDelete(item._id)} className={cx("btn-delete")}>delete</button>
            </div>
          </div>
        ))}
      </div>
      <CommentForm dataCmt={data} />
    </div>
  );
};
export default Comment;
