import React, { useState } from "react";
import {homeDarkColor, homeLightColor, backgroundColor3sAnimation} from "./../../main-constants";
import "./certificate.css";

function Certificate(props) {
  const [bgColour, setBgColour] = useState(homeDarkColor);
  const [textColour, setTextColour] = useState(homeLightColor);
  const bgStyles = {
    background: `${bgColour}`,
    "transition": backgroundColor3sAnimation
  };
  const textStyles = {
    color: `${textColour}`
  }
  const cssClassName = ["certificate", props.cssClassName].join(" ");
  return (
      <li className={cssClassName}
          style={bgStyles}
          onMouseEnter={() => {
              setBgColour(homeLightColor);
              setTextColour(homeDarkColor);
          }}
          onMouseLeave={() => {
            setBgColour(homeDarkColor);
            setTextColour(homeLightColor);
          }}>
        <p className="caption" title="Click to open in new tab">
            <a href={props.href} 
               style={textStyles}
               target="_blank" 
               rel="noreferrer">
                {props.caption}
            </a>
        </p>
      </li>
  );
}

export default Certificate;