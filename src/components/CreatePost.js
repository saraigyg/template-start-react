import React, { useState } from "react";
import "../styles/forms.css";

const CreatePost = ({onPress, toSave}) => {

    const newPost = {
        title: "",
        body: "",
        imageUrl: "",
        updatedAt:""
    }

    const [newPostState, setNewPostState] = useState(newPost);

    return (
        <div className="container">
            <form id="create-post-form" className="post-form">
                <div className="input-field">
                    <label>Title</label>
                    <input
                    type = "text"
                    name = "title"
                    placeholder= "Add a title"
                    />
                </div>
                <div className="input-field">
                    <label>Body</label>
                    <textarea 
                    type = "text"
                    name = "body"
                    placeholder="Add a body to the post"
                    />
                </div>
                <div className="input-field">
                    <label>Image</label>
                    <input
                    type = "file"
                    name = "image"
                    />
                </div>
                <div className="buttons-container">
                    <button
                    type="button"
                    onClick={()=> onPress()}
                    >Cancel
                    </button>
                    <button
                    type="button"
                    onClick={() => toSave(newPostState)}
                    >Save
                    </button>
                </div>   
            </form>
        </div>
    );
}

export default CreatePost;