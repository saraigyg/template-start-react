import React from "react";
import "../styles/blog.css";

const Post = ({post, onEdit}) => {
    return (
        <div className="blog-post">
            <div className="blog-post-image">
            <img src={post.imageUrl} alt = "blog header pic" weight = {250} height = {250}/>
            </div>
            <div className="blog-post-details">
                <p>{post.updatedAt}</p>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <a href = "#">Read More</a>
            </div>
            <button
            onClick={()=> onEdit()}
            >Edit

            </button>
        </div>

    );
}

export default Post;