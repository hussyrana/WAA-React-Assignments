import React, { useState } from 'react';
import PostList from '../components/post/PostList';
import "../components/post/Post.css";
import PostDetail from '../components/post/PostDetail';
const DashBoard = () => {
    const [posts, setPosts] = useState([
        {id:111, title:"Happiness", author:"John", content:"dhskjbf djfks sdjfk"},
        {id:112, title:"MIU", author:"Dean", content:"dkjshfkjsdf dkjfb sdkjb"},
        {id:113, title:"Enjoy Life", author:"Jasmin", content: "skdasjh akjbf sajdkbf"}
    ]);
    const [changeTitle, setChangeTitle] = useState("");
    const [givenId, setGivenId] = useState(0);
    const handleTitleChange = ()=>{
        const updatedPosts = posts.map(p=>{
            if(p.id==givenId && changeTitle!==""){
                p.title=changeTitle;
            }
            return p;
        })
        setPosts(updatedPosts);
    }
    const [specificPost, setSpecificPost] = useState({
        id:0,
        title:"",
        author:"",
        content:""
    })
    const handlePostClick = (props)=>{
        setSpecificPost(props);
    }

    return (
        <>
        <div className='container'>
            <PostList posts = {posts} specificPostClick = {handlePostClick}/>
            <input name='id' value={givenId} onChange={(e)=>{setGivenId(e.target.value)}}/>
            <input name='title' value={changeTitle} onChange={(e)=>{setChangeTitle(e.target.value)}}/>
            <button onClick={handleTitleChange}>Change Name</button>
            <div className='postDetail'>
            <PostDetail title={specificPost.title} author={specificPost.author} content={specificPost.content}/>
        </div>
        </div>
        
        </>
    );
};

export default DashBoard;