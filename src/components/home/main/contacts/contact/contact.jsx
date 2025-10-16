import React from "react";
import "./contact.css";

function Contact({icon, type, caption, href}) {
  const iconClassName = ["contact-icon", icon].join(' ');
  const targetValue = type === "link" ? "_blank" : "_self";
  const relValue = type === "link" ? "noreferrer" : "";
  return (
        <li className="caption">
          <a href={href} target={targetValue} rel={relValue}>
            <i className={iconClassName}></i>
            {caption}
          </a>
        </li>
  );
}

export default Contact;