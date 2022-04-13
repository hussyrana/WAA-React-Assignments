import React, { useState } from "react";
import PostList from "../components/post/PostList";
import "../components/post/Post.css";
import PostDetail from "../components/post/PostDetail";
import axios from "axios";
import AddPost from "../components/post/AddPost";
import SelectedPost from "../context/SelectedPost";
const DashBoard = () => {
  const [specificPost, setSpecificPost] = useState({});
  const [updateFlag, setUpdateFlag] = useState(false);

  const handlePostClick = (id) => {
    axios
      .get("http://localhost:8080/api/v1/posts/" + id)
      .then((res) => {
        setSpecificPost(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleUpdateFlag = () => {
    setUpdateFlag(!updateFlag);
    setSpecificPost({});
  };

  return (
    <SelectedPost.Provider value={handlePostClick}>
      <div className="container">
        <PostList updateFlag={updateFlag}/>
        <div className="postDetail">
          <PostDetail
            handleUpdateFlag={handleUpdateFlag}
            id={specificPost.id}
            title={specificPost.title}
            author={specificPost.author}
            content={specificPost.content}
            comments={specificPost.comments}
          />
        </div>
        <div>
          <AddPost handleUpdateFlag={handleUpdateFlag} />
        </div>
      </div>
    </SelectedPost.Provider>
  );
};

export default DashBoard;
