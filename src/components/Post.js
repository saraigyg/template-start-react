import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const Post = ({post, onEdit, postId}) => {
    return (
        <div className="blog-post">
            <div className="blog-post-image">
            <img src={post.imageUrl} alt = "blog header pic" weight = {250} height = {250}/>
            </div>
            <div className="blog-post-details">
                <p>{post.updatedAt}</p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <Link to={`post/${postId}`}>Read More</Link>
            </div>
            <Link
            to="/create-post">
            <button style={{height: 40, borderRadius: 6, borderColor: "black"}}
            onClick={()=> onEdit()}
            >Edit
            </button>
            </Link>
        </div>

    );
}

export default Post;