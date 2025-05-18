import React from "react";
import "./aboutMe.css";

function AboutMe() {
    return (
      <React.Fragment>
        <div className="subsection__aboutme">
          <img className="aboutme__photo" src="me.jpeg" alt="website developer" />
          <article className="aboutme__text"> 
            <p className="aboutme__paragraph">
            Hello, my name is Natalia.
I'm a frontend developer passionate about creating clean, user-friendly, and responsive web interfaces.
I've worked with technologies like HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Angular, and React.
I enjoy building web applications that people find easy to use, and I value being part of projects that have a meaningful impact.
My recent experience includes developing web applications for the healthcare sector — helping medical staff, children in intensive care units and families stay connected through intuitive, modern interfaces.
            </p>
            <p className="aboutme__paragraph">I find the most inspiration in building and improving the user-friendly web interfaces and continually improving my frontend skills. Feel free to check out my projects below!</p>
          </article>
        </div>
      </React.Fragment>
    );
}

export default AboutMe;