import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../comment/CommentList";
import "./Post.css";
const PostDetail = (props) => {

  const params = useParams();
  const navigate = useNavigate();
  const [postDetail, setPostDetail] = useState({});

  useEffect(() => {
    if (params.id) {
      axios
        .get("http://localhost:8080/api/v1/posts/" + params.id)
        .then((res) => {
          setPostDetail(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [params.id]);

  const handleDeleteButton = () => {
    axios
      .delete("http://localhost:8080/api/v1/posts/" + params.id)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  let postDetails = null;
  if (params.id) {
    postDetails = (
      <div className="postDetail">
        <div>
          <h5>{postDetail.title}</h5>
          <h6>{postDetail.author}</h6>
          <p>{postDetail.content}</p>
        </div>
        <div>
          <CommentList comments={postDetail.comments} />
        </div>
        <div>
          <button className="button">edit</button>
          <button onClick={handleDeleteButton} className="button">
            delete
          </button>
        </div>
      </div>
    );
  }

  return postDetails;
};

export default PostDetail;
