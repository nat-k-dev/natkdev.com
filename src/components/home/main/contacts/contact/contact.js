import React, {useState} from "react";
import {homeDarkColor, homeLightColor, backgroundColor3sAnimation} from "./../../main-constants";
import "./contact.css";

function Contact(props) {
  const [bgColour, setBgColour] = useState(homeDarkColor);
  const [textColour, setTextColour] = useState(homeLightColor);
  const bgStyles = {
    background: `${bgColour}`,
    color: `${textColour}`,
    "transition": backgroundColor3sAnimation
  };
  const iconClassName = ["contact-icon", props.icon].join(' ');
  const targetValue = props.type === "link" ? "_blank" : false;
  const relValue = props.type === "link" ? "noreferrer" : false;
  return (
        <li className="caption"
            style={bgStyles}
            onMouseEnter={() => {
                setBgColour(homeLightColor);
                setTextColour(homeDarkColor);
            }}
            onMouseLeave={() => {
              setBgColour(homeDarkColor);
              setTextColour(homeLightColor);
            }}>
          <a href={props.href} target={targetValue} rel={relValue}>
            <i className={iconClassName}></i>
            {props.caption}
          </a>
        </li>
  );
}

export default Contact;