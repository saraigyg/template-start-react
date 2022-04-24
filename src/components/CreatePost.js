import React, { useState } from "react";
import "../styles/forms.css";
import { Link } from "react-router-dom";

const CreatePost = ({ onSave, postToUpdate}) => {

    const newPost = {
        title: "",
        body: "",
        imageUrl: "",
        updatedAt:(new Date()).toISOString()
    }

   /*useEffect(()=>{
        setNewPostState(newPost);
    }); //[]);*/

    const [newPostState, setNewPostState] = useState(postToUpdate || newPost);
    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNewPostState({...newPostState, [name] : value});
    }

    return (
        <div className="container">
            <form id="create-post-form" className="post-form">
                <div className="input-field">
                    <label>Post title</label>
                    <input
                    type = "text"
                    name = "title"
                    placeholder= "Add a title"
                    value = {newPostState.title}
                    onChange={handleOnChange}
                    />
                </div>
                <div className="input-field">
                    <label>Post content</label>
                    <textarea
                    style={{ height: "100px"}} 
                    type = "text"
                    name = "body"
                    placeholder="Add a body to the post"
                    value = {newPostState.body}
                    onChange={handleOnChange}
                    />
                </div>
                <div className="input-field">
                    <label>Post image url</label>
                    <input
                    type = "text"
                    name = "imageUrl"
                    placeholder="Add an image"
                    value = {newPostState.imageUrl}
                    onChange={handleOnChange}
                    />
                </div>
                <div className="buttons-container">
                    <Link
                    to="/"
                    >Cancel
                    </Link>
                    <Link
                    to="/"
                    onClick={() => onSave(newPostState)}
                    >Save post
                    </Link>
                </div>   
            </form>
        </div>
    );
}

export default CreatePost;