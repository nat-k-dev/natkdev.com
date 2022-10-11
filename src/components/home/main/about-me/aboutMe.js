import React from "react";
import "./aboutMe.css";

function AboutMe() {
    return (
      <React.Fragment>
        <div className="subsection__aboutme">
          <img className="aboutme__photo" src="me.jpg" alt="website developer" />
          <article className="aboutme__text"> 
            <p className="aboutme__paragraph">Hello, my name is Natalia. I'm interested in front-end development and I'm working with HTML, CSS, TailwindCSS, Javascript, React, Vue, Angular and WordPress. In my previous job as a junior C++ programmer, I had various tasks related to testing, refactoring and algorithms. And most of all I was inspired by the tasks to improve the program interface. I became more interested in this area, and this led me to the world of front-end development. I have completed courses in HTML, CSS and Javascript, created several web-pages using React, Vue, Angular and WordPress, and continue my studies towards user interfaces technologies.</p>
            <p className="aboutme__paragraph">At the moment I am open to new professional opportunities, internships and volunteer work projects in getting a related experience. Please, see below my projects that were developed during my studies and other materials to learn more about me.</p>
          </article>
        </div>
      </React.Fragment>
    );
}

export default AboutMe;