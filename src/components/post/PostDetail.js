import React from 'react';
import "./Post.css";
const PostDetail = (props) => {
    return (
        <div>
            <h5>{props.title}</h5>
            <h6>{props.author}</h6>
            <p>{props.content}</p>
        </div>
    );
};

export default PostDetail;