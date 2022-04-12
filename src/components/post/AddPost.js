import axios from "axios";
import React, { useState } from "react";
import "./Post.css";
const AddPost = (props) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddButton = () => {
    axios
      .post("http://localhost:8080/api/v1/posts/", {
        title: title,
        content: content,
        author: author,
        userId: "2",
      })
      .then((res) => {
          setAuthor("");
          setTitle("");
          setContent("");
          props.handleUpdateFlag();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="postForm">
      <h4>New Post</h4>
      <label htmlFor="author" name="author">
        Author
      </label>
      <input
        className="input"
        name="author"
        id="author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <label htmlFor="title" name="title">
        Title
      </label>
      <input
        className="input"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label htmlFor="content" name="content">
        Content
      </label>
      <input
        className="input"
        id="content"
        value={content}
        name="content"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="button" onClick={handleAddButton}>
        Add Post
      </button>
    </div>
  );
};

export default AddPost;
