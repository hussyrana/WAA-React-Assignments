import React from 'react';
import "./Comment.css";
const Comment = (props) => {
    return (
        <div className='comment'>
            <p>{props.name}</p>
        </div>
    );
};

export default Comment;