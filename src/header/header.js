import React from "react";
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => (
    <div className="header">
        <Link to={"/"}>
            <i class="fas fa-film fa-3x"></i>
        </Link>
        <div className="content">
            <h1>{"Moview"}</h1>
            <h4>{"Find the right movie!"}</h4>
        </div>
    </div>
)

export default Header;