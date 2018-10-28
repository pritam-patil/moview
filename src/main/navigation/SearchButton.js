import React from "react";
import "./SearchButton.css";

const SearchButton = ({ onClick, onClose }) => (
    <div className="search-button">
        <i class="fas fa-times-circle fa-2x" onClick={onClose}></i>
        <i class="fas fa-chevron-circle-right fa-2x" style={{color:  "blue"}} onClick={onClick}></i>
    </div>
);

export default SearchButton;