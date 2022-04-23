import React from "react";
import "../styles/blog.css";

const NavBar = ({onPress}) => {
    return(
        <div className="blog-post-navbar">
            <div className="blog-post-brand">
                <a href="https://itjuana.com/"> 
                <img src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png" alt="itjuana-img" 
                width = {80} height = {80}/>
                </a>
            </div>
            <ul>
                <li className="blog-post-navbar"><a href ="#">Join our team</a></li>
                <li className="blog-post-navbar"><a href ="#">Contact us</a></li>
                <li className="blog-post-navbar"><button onClick={()=>onPress()}>Create new post</button></li>
            </ul>
        </div>

    );
}

export default NavBar;