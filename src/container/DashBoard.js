import React, { useState } from "react";
import PostList from "../components/post/PostList";
import "../components/post/Post.css";
import PostDetail from "../components/post/PostDetail";
import axios from "axios";
import AddPost from "../components/post/AddPost";
const DashBoard = () => {
  // const [changeTitle, setChangeTitle] = useState("");
  // const [givenId, setGivenId] = useState(0);
  // const handleTitleChange = ()=>{
  //     const updatedPosts = posts.map(p=>{
  //         if(p.id==givenId && changeTitle!==""){
  //             p.title=changeTitle;
  //         }
  //         return p;
  //     })
  //     setPosts(updatedPosts);
  // }
  const [specificPost, setSpecificPost] = useState({});
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
  const [updateFlag, setUpdateFlag] = useState(false);
  const handleUpdateFlag = () => {
    setUpdateFlag(!updateFlag);
    setSpecificPost({});
  };

  return (
    <>
      <div className="container">
        <PostList updateFlag={updateFlag} specificPostClick={handlePostClick} />
        {/* <input name='id' value={givenId} onChange={(e)=>{setGivenId(e.target.value)}}/>
            <input name='title' value={changeTitle} onChange={(e)=>{setChangeTitle(e.target.value)}}/>
            <button onClick={handleTitleChange}>Change Name</button> */}
        <div className="postDetail">
          <PostDetail
            handleUpdateFlag={handleUpdateFlag}
            id={specificPost.id}
            title={specificPost.title}
            author={specificPost.author}
            content={specificPost.content}
            comments = {specificPost.comments}          />
        </div>
        <div>
            <AddPost handleUpdateFlag={handleUpdateFlag}/>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
