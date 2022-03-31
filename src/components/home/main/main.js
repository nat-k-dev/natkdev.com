import React from "react";
import AboutMe from "./about-me/aboutMe";
import Projects from "./projects/projects";
import Certificates from "./certificates/certificates";
import Blogs from "./blogs/blogs";
import Contacts from "./contacts/contacts";
import "./main.css";

function Main() {
    return (
        <main className="main">
            <div id="aboutme"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">About me:</h2>
              <AboutMe />
            </section>
  
            <div id="projects"></div>
            <section className="main__subsection">	
              <h2 className="subsection__header">My projects:</h2>
              <Projects />
            </section>
  
            <div id="certificates"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">My certificates:</h2>
              <Certificates />
            </section>
  
            <div id="blogs"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">My blogs:</h2>
              <Blogs />            
            </section>
  
            <div id="contacts"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">Contacts:</h2>
              <Contacts />
            </section>
          </main>
    );
}

export default Main;