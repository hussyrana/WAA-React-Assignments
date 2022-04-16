import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import "./Post.css";
import axios from "axios";
import PostDetail from "./PostDetail";
import { Link } from "react-router-dom";

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
    <Link to={`${p.id}`} className="post" key={p.id}>
      <Post id={p.id} title={p.title} author={p.author} />
    </Link>
  ));
  return (
    <>
      <div className="postList">{postsJsx}</div>
      <div>
        <PostDetail />
      </div>
    </>
  );
};

export default PostList;
