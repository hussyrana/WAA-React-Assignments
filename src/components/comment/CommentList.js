import React from 'react';
import Comment from './Comment';
import "./Comment.css";
const CommentList = (props) => {
    console.log('commentlist Renders');
    const comments = props.comments!=null ? props.comments.map(c=><Comment key={c.id} name={c.name}/>):"";
    return (
        <div className='commentList'>
            <h6>Comments:</h6>
            {comments}
        </div>
    );
};

export default CommentList;