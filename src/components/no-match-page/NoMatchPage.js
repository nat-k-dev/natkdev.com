import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common-blocks/footer/footer";
import "./no-match-page.css";

const NoMatchPage = () => {
    return (
        <div className="no-match-page">
    	    <div className="no-match-page-content">
                <div className="caption-404">
                    <div className="number-404">4</div>
                    <div className="moon-404">
                        <div className="moon-craters-404" />
                        <div class="gravity">
                            <div class="satellite"></div>
                        </div>
                    </div>
                    <div className="number-404">4</div>
                </div>
                <h1>Page Not Found</h1>
                <p>Sorry, but the page you were trying to view does not exist.</p>
                <Link className="no-match-page-home-link" to="/">Home</Link>
            </div>
            <Footer />
        </div>
    );
}

export default NoMatchPage;