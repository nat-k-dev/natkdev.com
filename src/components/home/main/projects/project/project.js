import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

function Project(props) {

    const cssClassName = ["project", props.cssClassName].join(' ');

    return (
        <div className={cssClassName}>
                {props.internalPage ? 
                    <Link to={props.link}>
                        <p className="caption project-caption_text-center">{props.caption}</p>
                        <div className="icon"></div>
                    </Link> :
                    <a href={props.link} title="Click to open in new tab" target="_blank" rel="noreferrer">
                        <p className="caption project-caption_text-center">{props.caption}</p>
                        <div className="icon"></div>
                    </a>
                }
        </div>
    );
}

export default Project;