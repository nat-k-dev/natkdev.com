import React, { useState } from "react";
import {homeDarkColor, homeLightColor, backgroundColor3sAnimation} from "../../main-constants";
import "./blog.css";

function Blog(props) {
  const [bgColour, setBgColour] = useState(homeLightColor);
  const [textColour, setTextColour] = useState(homeDarkColor);
  const bgStyles = {
    background: `${bgColour}`,
    "transition": backgroundColor3sAnimation
  };
  const textStyles = {
    color: `${textColour}`
  };
  const cssClassName = ["article", props.cssClassName].join(" ");
  return (
      <li className={cssClassName}
          style={bgStyles}
          onMouseEnter={() => {
              setBgColour(homeDarkColor);
              setTextColour(homeLightColor);
          }}
          onMouseLeave={() => {
            setBgColour(homeLightColor);
            setTextColour(homeDarkColor);
          }}>
        <p className="caption" title="Click to open in new tab">
          <a href={props.href} style={textStyles} target="_blank" rel="noreferrer">
            {props.caption}
          </a>
        </p>
      </li>
  );
}

export default Blog;