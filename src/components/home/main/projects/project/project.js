import React, { useState } from "react";
import { Link } from "react-router-dom";
import {homeDarkColor, homeLightColor, backgroundColor3sAnimation} from "./../../main-constants";
import "./project.css";

function Project(props) {
    const [bgColour, setBgColour] = useState(homeLightColor);
    const [textColour, setTextColour] = useState(homeDarkColor);
    const bgStyles = {
      background: `${bgColour}`,
      color: `${textColour}`,
      "transition": backgroundColor3sAnimation
    };
    const cssClassName = ["project", props.cssClassName].join(' ');

    return (
        <div className={cssClassName}
                  style={bgStyles}
                  onMouseEnter={() => {
                      setBgColour(homeDarkColor);
                      setTextColour(homeLightColor);
                  }}
                  onMouseLeave={() => {
                    setBgColour(homeLightColor);
                    setTextColour(homeDarkColor);
                  }}>
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