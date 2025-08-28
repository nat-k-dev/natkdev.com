import React from "react";
import {Link} from "react-router-dom";
import "./back-home-button.css";

function BackHomeButton() {
    return (
        <div className="back-home-button">
            <Link to="/">Home</Link>
        </div>
    );
}

export default BackHomeButton;