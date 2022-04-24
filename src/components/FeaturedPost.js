import React from "react";
import { Link } from "react-router-dom";
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
                <Link to={blogLink}>Read More</Link>
            </div>
        </div>
    );
}

export default FeaturedPost;