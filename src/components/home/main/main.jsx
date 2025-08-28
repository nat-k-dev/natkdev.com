import React from "react";
import AboutMe from "./about-me/aboutMe.jsx";
import Projects from "./projects/projects.jsx";
import MyBackground from "./my-background/my-background.jsx";
import Contacts from "./contacts/contacts.jsx";
import "./main.css";
import Education from "./education/education.jsx";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();
    return (
        <main className="main">
            <div id="aboutme"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">
                {t("FrontendDeveloper")}
                <img src="frontend-icon-responsive.png" alt="icon with desktop, tablet and smartphone" />
              </h2>
              <AboutMe />
            </section>
  
            <div id="projects"></div>
            <section className="main__subsection">	
              <h2 className="subsection__heading">{t("Projects")}</h2>
              <Projects />
            </section>
  
            <div id="experience"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">{t("Experience")}</h2>
              <MyBackground />
            </section>
  
            <div id="education"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">{t("Education")}</h2>
              <Education />            
            </section>
  
            <div id="contacts"></div>
            <section className="main__subsection">
              <h2 className="subsection__heading">{t("Contacts")}</h2>
              <Contacts />
            </section>
          </main>
    );
}

export default Main;