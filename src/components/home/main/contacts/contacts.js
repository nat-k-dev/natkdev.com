import React from "react";
import Contact from "./contact/contact";
import {contactsInfo} from "./contacts-info";
import "./contacts.css";

function Contacts() {
  return (
    <div className="subsection__contacts">				
      <ul className="contact-list">
        <Contact type={contactsInfo.github.type}
                 href={contactsInfo.github.href}
                 icon={contactsInfo.github.icon}
                 caption={contactsInfo.github.caption} />
        <Contact type={contactsInfo.email.type}
                 href={contactsInfo.email.href}
                 icon={contactsInfo.email.icon}
                 caption={contactsInfo.email.caption} />
        <Contact type={contactsInfo.linkedIn.type}
                 href={contactsInfo.linkedIn.href}
                 icon={contactsInfo.linkedIn.icon}
                 caption={contactsInfo.linkedIn.caption} />            
      </ul>	
    </div>
  );
}

export default Contacts;