import React from "react";

import "./main.css";
import Project from "./project/project";

function Main() {
    const projectsData = {
      messier: {
        internalPage: false,
        cssClassName: "project__messier-objects",
        link: "https://messier-objects.firebaseapp.com",
        caption: "Online Store on React"
      },
      hadnDadn: {
        internalPage: false,
        cssClassName: "project__hadn-dadn",
        link: "https://hadn-dadn.netlify.app",
        caption: "Music band page"
      },
      smartphone: {
        internalPage: false,
        cssClassName: "project__smartphone",
        link: "https://codepen.io/appalse/full/LvPvbgp",
        caption: "Smartphone rotation"
      },
      tributePage: {
        internalPage: false,
        cssClassName: "project__tribute-page",
        link: "https://codepen.io/appalse/full/MRmoNg",
        caption: "Tenzing Norgay tribute page"
      },
      memoji: {
        internalPage: true,
        cssClassName: "project__memoji-game",
        link: "/memoji",
        caption: "Memoji web-game"
      },
      binaryCalc: {
        internalPage: true,
        cssClassName: "project__binary-calculator",
        link: "/binary-calculator",
        caption: "Binary calculator online"
      },
      designSystem: {
        internalPage: true,
        cssClassName: "project__design-system",
        link: "/design-system",
        caption: "Design system"
      },
      sportmaster: {
        internalPage: true,
        cssClassName: "project__sportmaster",
        link: "/sportmaster",
        caption: "PSD to HTML, CSS"
      }
    };
    return (
        <main className="main">
  
            <div id="aboutme"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">About me:</h2>
              <img className="aboutme__photo" src="me.jpg" alt="website developer" />
              <article className="aboutme__text"> 
                <p className="aboutme__paragraph">Hello, my name is Natalia. I'm interested in front-end development and I'm currently learning HTML, CSS, Javascript and React. In my previous job as a junior C++ programmer, I had various tasks related to testing, refactoring and algorithms. And most of all I was inspired by the tasks to improve the program interface. I became more interested in this area, and this led me to the world of front-end development. I have completed courses in HTML, CSS and Javascript, created several web-pages and continue my studies towards the React library.</p>
                <p className="aboutme__paragraph">At the moment I am open to new professional opportunities, internships and volunteer work projects in getting a related experience. Please, see below my projects that were developed during my studies and other materials to learn more about me.</p>
              </article>	
            </section>
  
            <div id="projects"></div>
            <section className="main__subsection">	
              <h2 className="subsection__header">My projects:</h2>
              <div className="projects">
                <Project cssClassName={projectsData.messier.cssClassName} 
                         link={projectsData.messier.link}
                         caption={projectsData.messier.caption}
                         internalPage={projectsData.messier.internalPage} />
                <Project cssClassName={projectsData.hadnDadn.cssClassName} 
                         link={projectsData.hadnDadn.link}
                         caption={projectsData.hadnDadn.caption}
                         internalPage={projectsData.hadnDadn.internalPage} />
                <Project cssClassName={projectsData.smartphone.cssClassName} 
                         link={projectsData.smartphone.link}
                         caption={projectsData.smartphone.caption}
                         internalPage={projectsData.smartphone.internalPage} />
                <Project cssClassName={projectsData.tributePage.cssClassName} 
                         link={projectsData.tributePage.link}
                         caption={projectsData.tributePage.caption}
                         internalPage={projectsData.tributePage.internalPage} />

                <Project cssClassName={projectsData.memoji.cssClassName} 
                         link={projectsData.memoji.link}
                         caption={projectsData.memoji.caption}
                         internalPage={projectsData.memoji.internalPage} /> 
                <Project cssClassName={projectsData.binaryCalc.cssClassName} 
                         link={projectsData.binaryCalc.link}
                         caption={projectsData.binaryCalc.caption}
                         internalPage={projectsData.binaryCalc.internalPage} /> 
                <Project cssClassName={projectsData.designSystem.cssClassName} 
                         link={projectsData.designSystem.link}
                         caption={projectsData.designSystem.caption}
                         internalPage={projectsData.designSystem.internalPage} /> 
                <Project cssClassName={projectsData.sportmaster.cssClassName} 
                         link={projectsData.sportmaster.link}
                         caption={projectsData.sportmaster.caption}
                         internalPage={projectsData.sportmaster.internalPage} />                                                        
                
                
              </div>	
            </section>
  
            <div id="learning"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">My certificates:</h2>
              <ul className="certificates">
                <li className="certificate certificate__coursera-frontend">
                  <p className="caption" title="Click to open in new tab"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/PWMDB5J9ESS8" target="_blank" rel="noreferrer">Frontend: page making and Javascript, Coursera by MIPT and Yandex</a></p>
                </li>
                <li className="certificate certificate__free-code-camp">
                  <p className="caption" title="Click to open in new tab"><a href="https://www.freecodecamp.org/fcc3ad6e5ae-7fed-4b67-ad44-2c42570b0bc3" target="_blank" rel="noreferrer">FreeCodeCamp (Responsive Web)</a></p>
                </li>
              </ul>
            </section>
  
            <div id="blog"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">My blog:</h2>
              <ul className="articles">
                <li className="article article__openssh">
                  <p className="caption" title="Click to open in new tab"><a href="https://natalia-kutina.livejournal.com/9076.html" target="_blank" rel="noreferrer">OpenSSH for github, host and local machines</a></p>
                </li>
              </ul>
            </section>
  
            <div id="contacts"></div>
            <section className="main__subsection">
              <h2 className="subsection__header">Contacts:</h2>
              <div className="subsection__contacts">				
                <ul className="contact-list">
                  <li className="caption"><a href="https://github.com/nat-k-dev" target="_blank" rel="noreferrer"><i className="contact-icon fab fa-github"></i>Github</a></li>
                  <li className="caption"><a href="mailto:natalia.kutina13@gmail.com"><i className="contact-icon fas fa-envelope"></i>Email</a></li>
                  <li className="caption"><a href="https://www.linkedin.com/in/nataliakutina" target="_blank" rel="noreferrer"><i className="contact-icon fab fa-linkedin-in"></i>LinkedIn</a></li>
                </ul>	
  
              </div>
            </section>
  
          </main>
    );
}

export default Main;