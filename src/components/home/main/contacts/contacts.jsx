import React from "react";
import Contact from "./contact/contact.jsx";
import {CONTACTS_INFO} from "./contacts-info.js";
import "./contacts.css";

function Contacts() {
  return (
    <div className="subsection__contacts">				
      <ul className="contact-list">
        <Contact {...CONTACTS_INFO.github}/>
        <Contact {...CONTACTS_INFO.email}/>
        <Contact {...CONTACTS_INFO.linkedIn}/>            
      </ul>	
    </div>
  );
}

export default Contacts;