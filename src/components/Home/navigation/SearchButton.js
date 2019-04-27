import React from "react";
import "./SearchButton.css";

const SearchButton = ({ onClick, onClose }) => (
    <div className="search-button">
        <i
            class="far fa-times-circle fa-2x"
            onClick={onClose}
        />
        <i
            id="custom-search-button"
            role="navigation"
            tabIndex={0}
            class="fas fa-chevron-circle-right fa-2x"
            style={{color:  "blue"}}
            onClick={onClick}
        />
    </div>
);

export default SearchButton;