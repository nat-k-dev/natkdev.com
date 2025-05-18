import React from "react";
import "./background.css";

function Background(props) {
  const cssClassName = ["background", props.cssClassName].join(" ");
  return (
      <li className={cssClassName}>
        <p className="caption" title="Click to open in new tab">
            <a href={props.href} 
               target="_blank" 
               rel="noreferrer">
                {props.caption}
            </a>
        </p>
      </li>
  );
}

export default Background;