import React from "react";
import { Link } from "react-router-dom";
import Footer from "./../common-blocks/footer/footer";
import Header from "../common-blocks/header/header";
import "./home.css";

const Home = () => {

  
    return (
      <div className="home-page">
          <Header />  
          <Footer />
  
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
                
                <div className="project project__messier-objects">
                  <a href="https://messier-objects.firebaseapp.com" title="Click to open in new tab" target="_blank" rel="noreferrer">
                    <p className="caption">Online Store on React</p>
                    <div className="icon"></div>
                  </a>		
                </div>
                <div className="project project__hadn-dadn">
                  <a href="https://hadn-dadn.netlify.app" title="Click to open in new tab" target="_blank" rel="noreferrer">
                    <p className="caption">Music band page</p>
                    <div className="icon"></div>
                  </a>
                </div>
                <div className="project project__smartphone">
                  <a href="https://codepen.io/appalse/full/LvPvbg" title="Click to open in new tab" target="_blank" rel="noreferrer">
                    <p className="caption">Smartphone rotation</p>
                    <div className="icon"></div>
                  </a>		
                </div>
                <div className="project project__tribute-page">
                  <a href="https://codepen.io/appalse/full/MRmoNg" title="Click to open in new tab" target="_blank" rel="noreferrer">
                    <p className="caption">Tenzing Norgay tribute page</p>
                    <div className="icon"></div>
                  </a>
                </div>
                <div className="project project__memoji-game">
                  <Link to="/memoji">
                    <p className="caption">Memoji web-game</p>
                    <div className="icon"></div>				
                  </Link>
                </div>
                <div className="project project__binary-calculator">
                  <Link to="/binary-calculator">
                    <p className="caption">Binary calculator online</p>
                    <div className="icon"></div>
                  </Link>		
                </div>
                <div className="project project__design-system">
                  <Link to="/design-system">
                    <p className="caption">Design system</p>
                    <div className="icon"></div>
                  </Link>
                </div>
                <div className="project project__sportmaster">
                  <Link to="/sportmaster">
                    <p className="caption">PSD to HTML, CSS</p>
                    <div className="icon"></div>
                  </Link>
                </div>
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
      </div>
    );
  }

export default Home;
