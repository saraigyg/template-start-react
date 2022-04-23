import React from "react";
import Post from "./Post";

const PostList = ({posts}) => {
    return (
        <>
        {
            posts.map(post => {
                return <Post key={post.updatedAt + post.title} post={post} />
            })
        }
        
        </>

    );
}

export default PostList;