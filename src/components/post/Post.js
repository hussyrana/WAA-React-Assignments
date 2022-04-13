import React, {useContext} from 'react';
import SelectedPost from '../../context/SelectedPost';
import "./Post.css";

const Post = (props) => {
    const selectedPost = useContext(SelectedPost);
    return (
        
        <div className='post' onClick={()=>{selectedPost(props.id)}} >
            <h6>Id: {props.id}</h6>
            <h6>Title: {props.title}</h6>
            <h6>Author: {props.author}</h6>
        </div>
        
    );
};

export default Post;