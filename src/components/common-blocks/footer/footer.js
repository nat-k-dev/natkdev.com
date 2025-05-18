import React from "react";
import {Link} from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="footer footer-pin">&copy; <Link to="/">natkdev.com</Link> 2025</footer>
    );
}

export default Footer;