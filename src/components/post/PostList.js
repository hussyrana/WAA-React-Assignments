import React from 'react';
import Post from './Post';
import "./Post.css";

const PostList = (props) => {
    const posts = props.posts.map(p => <Post key={p.id} id={p.id} title={p.title} content={p.content} author={p.author} postClick={(propert)=>{
        props.specificPostClick(propert);
    }}/>)
    return (
        <div className='postList'>
            {posts}
        </div>
    );
};

export default PostList;