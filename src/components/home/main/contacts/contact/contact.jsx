import React from "react";
import "./contact.css";
import ContactIcon from "./contact-icon.jsx";

function Contact({icon, type, caption, href}) {
  const targetValue = type === "link" ? "_blank" : "_self";
  const relValue = type === "link" ? "noreferrer" : "";
  return (
        <li className="caption">
          <a href={href} target={targetValue} rel={relValue} className="flex items-center gap-2">
            <ContactIcon name={icon} className="contact-icon" />
            <p className="mt-1">{caption}</p>
          </a>
        </li>
  );
}

export default Contact;