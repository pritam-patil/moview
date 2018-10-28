import React from "react";
import "./header.css";
import image from '../../public/home-logo.jpeg';


const Header = () => (
    <div className="header">
        <i class="fas fa-film fa-3x"></i>
        <div className="content">
            <h1>{"Moview"}</h1>
            <h4>{"Find the right movie!"}</h4>
        </div>
    </div>
)

export default Header;