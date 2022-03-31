import React, { useState } from "react";
import { Link } from "react-router-dom";
import {homeDarkColor, homeLightColor} from "./../../main-constants";
import "./project.css";

function Project(props) {
    const [bgColour, setBgColour] = useState(homeDarkColor);
    const [textColour, setTextColour] = useState(homeLightColor);
    const bgStyles = {
      background: `${bgColour}`,
      color: `${textColour}`,
      "borderRadius": "10px"
    };
    const cssClassName = ["project", props.cssClassName].join(' ');

    return (
        <div className={cssClassName}
                  style={bgStyles}
                  onMouseEnter={() => {
                      setBgColour(homeLightColor);
                      setTextColour(homeDarkColor);
                  }}
                  onMouseLeave={() => {
                    setBgColour(homeDarkColor);
                    setTextColour(homeLightColor);
                  }}>
                {props.internalPage ? 
                    <Link to={props.link}>
                        <p className="caption">{props.caption}</p>
                        <div className="icon"></div>
                    </Link> :
                    <a href={props.link} title="Click to open in new tab" target="_blank" rel="noreferrer">
                        <p className="caption">{props.caption}</p>
                        <div className="icon"></div>
                    </a>
                }
        </div>
    );
}

export default Project;