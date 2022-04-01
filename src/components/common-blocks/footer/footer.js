import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer footer-pin">&copy; <Link to="/">nat-k-dev.com</Link> 2022</footer>
    );
}

export default Footer;