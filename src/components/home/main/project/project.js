import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./project.css";

function Project(props) {
    const homeDarkColor = "#1a405c";
    const homeLightColor = "#d8e3eb";
    const [bgColour, setBgColour] = useState(homeDarkColor);
    const [textColour, setTextColour] = useState(homeLightColor);
    const bgStyles = {
      background: `${bgColour}`,
      color: `${textColour}`,
      "borderRadius": "10px"
    };
    const cssClassName = ["project", props.cssClassName].join(' ');
    if (props.internalPage) {
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
                  <Link to={props.link}>
                    <p className="caption">{props.caption}</p>
                    <div className="icon"></div>				
                  </Link>
            </div>
        );
    } else {
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
                    <a href={props.link} title="Click to open in new tab" target="_blank" rel="noreferrer">
                        <p className="caption">{props.caption}</p>
                        <div className="icon"></div>
                    </a>		
            </div>
        );
    }
}

export default Project;