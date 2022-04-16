import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
const AddPost = () => {
  const postFormRef = useRef();
  const navigate = useNavigate();

  const handleAddButton = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/v1/posts/", {
        title: postFormRef.current["title"].value,
        content: postFormRef.current["content"].value,
        author: postFormRef.current["author"].value,
        userId: "2",
      })
      .then((res) => {
        postFormRef.current["title"].value = "";
        postFormRef.current["content"].value = "";
        postFormRef.current["author"].value = "";
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form ref={postFormRef} className="postForm">
      <h4>New Post</h4>
      <label htmlFor="author">Author</label>
      <input className="input" name="author" id="author" />
      <label htmlFor="title">Title</label>
      <input className="input" name="title" id="title" />
      <label htmlFor="content">Content</label>
      <input className="input" id="content" name="content" />
      <button type="Submit" className="button" onClick={handleAddButton}>
        Add Post
      </button>
    </form>
  );
};

export default AddPost;
