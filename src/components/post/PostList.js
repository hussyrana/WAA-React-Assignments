import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import "./Post.css";
import axios from "axios";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch(console.error());
  }, [props.updateFlag]);
  const postsJsx = posts.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      title={p.title}
      author={p.author}
      postClick={(id) => {
        props.specificPostClick(id);
      }}
    />
  ));
  return <div className="postList">{postsJsx}</div>;
};

export default PostList;
