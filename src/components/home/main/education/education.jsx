import React from "react";
import "./education.css";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
    return (
      <React.Fragment>
        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2006 - 2012</div>
            <img className="education__logo-img mai" src="mai.svg" alt="MAI logo" />
          </div>
          <div className="education__column">
            <p>Moscow Aviation Institute (State University of AerospaceTechnologies) </p>
            <p>Engineer's degree, Computer Science</p>
          </div>
        </div>

        <p className="my-10 text-center text-3xl ">{t("Courses")}</p>
        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2025</div>
            <img className="education__logo-img rounded-full" src="angular-udemy.png" alt="Angular course at Udemy logo" />
          </div>
          <div className="education__column">
            <p>Udemy</p>
            <a href={"https://www.udemy.com/certificate/UC-daae9ae8-71aa-4c12-90cb-d195c81c7700/"} 
               target="_blank" 
               rel="noreferrer">
                Angular - The Complete Guide (2025 Edition)
            </a>
          </div>
        </div>

        <div className="education__divider"></div>

        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2025</div>
            <img className="education__logo-img rounded-full" src="duo.png" alt="DUO logo" />
          </div>
          <div className="education__column">
            <p>Dienst Uitvoering Onderwijs (DUO)</p>
            <a href={"/inburgering-a2.pdf"} 
               target="_blank" 
               rel="noreferrer">
                Inburgeringsdiploma A2
            </a>
          </div>
        </div>

        <div className="education__divider"></div>

        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2019</div>
            <img className="education__logo-img rounded-full" src="yandex.png" alt="Yandex logo" />
          </div>
          <div className="education__column">
            <p>Yandex School of Web Interfaces Development</p>
            <p>6-months on-site program of web app development</p>
          </div>
        </div>

        <div className="education__divider"></div>

        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2019</div>
            <img className="education__logo-img" src="freecodecamp.jpg" alt="FreeCodeCamp logo" />
          </div>
          <div className="education__column">
            <p>freeCodeCamp</p>
            <p>
              <a href={"https://www.freecodecamp.org/fcc3ad6e5ae-7fed-4b67-ad44-2c42570b0bc3"} 
               target="_blank" 
               rel="noreferrer">
                Responsive Web Design Certification Program
              </a>
            </p>
          </div>
        </div>

        <div className="education__divider"></div>

        <div className="subsection__education">
          <div className="education__column">
            <div className="education__years">2018</div>
            <img className="education__logo-img" src="coursera.jpg" alt="Coursera logo" />
          </div>
          <div className="education__column">
            <p>Moscow Institute of Physics and Technology, Yandex, E-Learning Development Fund</p>
            <p>
              <a href={"https://www.coursera.org/account/accomplishments/specialization/certificate/PWMDB5J9ESS8"} 
                  target="_blank" 
                  rel="noreferrer">
                  Web interfaces development: HTML, CSS and JavaScript Specialization
              </a>
            </p>
            
          </div>
        </div>

{/*
        <p className="mt-10 text-center text-3xl">Certificates:</p>
        <ul className="list-disc mx-auto">
          <MyCertificate cssClassName={myCertificatesInfo.courseraYaFrontend.cssClassName}
                    href={myCertificatesInfo.courseraYaFrontend.href}
                    caption={myCertificatesInfo.courseraYaFrontend.caption} />
          <MyCertificate cssClassName={myCertificatesInfo.freeCodeCampResponsiveWeb.cssClassName}
                    href={myCertificatesInfo.freeCodeCampResponsiveWeb.href}
                    caption={myCertificatesInfo.freeCodeCampResponsiveWeb.caption} />
        </ul>
*/}
      </React.Fragment>
    );
}

export default Education;
