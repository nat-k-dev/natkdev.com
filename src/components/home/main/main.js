import React from "react";
import AboutMe from "./about-me/aboutMe";
import Projects from "./projects/projects";
import MyBackground from "./my-background/my-background";
import Blogs from "./blogs/blogs";
import Contacts from "./contacts/contacts";
import "./main.css";

function Main() {
    return (
        <main className="main">
            <div id="aboutme"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">About me</h2>
              <AboutMe />
            </section>
  
            <div id="projects"></div>
            <section className="main__subsection">	
              <h2 className="subsection__heading">My projects</h2>
              <Projects />
            </section>
  
            <div id="experience"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">My background</h2>
              <MyBackground />
            </section>
  
            <div id="blog"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">My articles</h2>
              <Blogs />            
            </section>
  
            <div id="contacts"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">Contacts</h2>
              <Contacts />
            </section>
          </main>
    );
}

export default Main;