import React from "react";
import "../styles/blog.css";

const FeaturedPost = ({image, title, updatedAt, content, blogLink, width, height}) => {
    return (
        <div className="blog-post-feature">
            <div className="blog-post-feature-image">
                <img src = {image} alt = "Feature Post Logo" width = {width} height = {height} />
            </div>
            <div className="blog-post-details">
                <p>{updatedAt}</p>
                <h1>{title}</h1>
                <p>{content}</p>
                <a href = {blogLink}>Read More</a>
            </div>
        </div>
    );
}

export default FeaturedPost;