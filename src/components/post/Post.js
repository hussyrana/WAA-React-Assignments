import "./Post.css";

const Post = (props) => {
    return (
        
        <div>
            <h6>Id: {props.id}</h6>
            <h6>Title: {props.title}</h6>
            <h6>Author: {props.author}</h6>
        </div>
        
    );
};

export default Post;