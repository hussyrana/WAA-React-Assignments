import axios from "axios";
import React, { useMemo } from "react";
import CommentList from "../comment/CommentList";
import "./Post.css";
const PostDetail = (props) => {
  const handleDeleteButton = () => {
    axios
      .delete("http://localhost:8080/api/v1/posts/" + props.id)
      .then((res) => {
        props.handleUpdateFlag();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div>
        <h5>{props.title}</h5>
        <h6>{props.author}</h6>
        <p>{props.content}</p>
      </div>
      <div>
        {useMemo(
          () => (
            <CommentList comments={props.comments} />
          ),
          [props.id]
        )}
      </div>
      <div>
        <button className="button">edit</button>
        <button onClick={handleDeleteButton} className="button">
          delete
        </button>
      </div>
    </>
  );
};

export default PostDetail;
