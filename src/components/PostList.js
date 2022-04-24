import React from "react";
import Post from "./Post";

const PostList = ({posts, onEdit}) => {
    return (
        <>
        {
            posts.map((post, index) => {
                return <Post key={post.updatedAt + post.title} post={post} onEdit={()=> onEdit(index)} postId = {index} />
            })
        }
        
        </>

    );
}

export default PostList;