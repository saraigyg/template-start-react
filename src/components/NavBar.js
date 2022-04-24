import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

const NavBar = () => {
    return(
        <div className="blog-post-navbar">
            <div className="blog-post-brand">
                <Link to="/"> 
                <img src="https://itjuana.com/wp-content/uploads/ITJ_tm-logo.png" alt="itjuana-img" 
                width = {80} height = {80}/>
                </Link>
            </div>
            <ul>
                <li className="blog-post-navbar"><Link to ="/join-our-team">Join our team</Link></li>
                <li className="blog-post-navbar"><Link to ="/contact-us">Contact us</Link></li>
                <li className="blog-post-navbar"><Link to="/create-post">Create new post</Link></li>
            </ul>
        </div>

    );
}

export default NavBar;