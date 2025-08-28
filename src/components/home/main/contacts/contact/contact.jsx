import React from "react";
import "./contact.css";

function Contact(props) {
  const iconClassName = ["contact-icon", props.icon].join(' ');
  const targetValue = props.type === "link" ? "_blank" : "_self";
  const relValue = props.type === "link" ? "noreferrer" : "";
  return (
        <li className="caption">
          <a href={props.href} target={targetValue} rel={relValue}>
            <i className={iconClassName}></i>
            {props.caption}
          </a>
        </li>
  );
}

export default Contact;