import React from "react";
import "./aboutMe.css";
import IconHtml from "../../../common-blocks/icons/icon-html.jsx";
import IconCss from "../../../common-blocks/icons/icon-css.jsx";
import IconJs from "../../../common-blocks/icons/icon-js.jsx";
import IconTailwindCss from "../../../common-blocks/icons/icon-tailwind-css.jsx";
import IconTs from "../../../common-blocks/icons/icon-ts.jsx";
import IconAngular from "../../../common-blocks/icons/icon-angular.jsx";
import IconReact from "../../../common-blocks/icons/icon-react.jsx";
import { useTranslation } from 'react-i18next';

function AboutMe() {
    const { t } = useTranslation();

    return (
      <React.Fragment>
        <div className="subsection__aboutme">
          <img className="aboutme__photo" src="me.jpeg" alt="website developer" />
          <article className="aboutme__text"> 
            <p className="aboutme__paragraph">
            Hello, my name is Natalia.
I'm a frontend developer passionate about creating clean, user-friendly, and responsive web interfaces.
I'm working with HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Angular, and React.
I enjoy building web applications that people find easy to use, and I value being part of projects that have a meaningful impact.
My recent experience includes developing web applications for the healthcare sector — helping medical staff, children in intensive care units and families stay connected through intuitive, modern interfaces.
            </p>
            <p className="aboutme__paragraph">{t("ABOUT_ME.Paragraph2")}</p>
            <div className="aboutme__skills">
              <div className="aboutme__skill">
                <IconHtml/>HTML
              </div>
              <div className="aboutme__skill">
                <IconCss/>CSS
              </div>
              <div className="aboutme__skill">
                <IconJs/>JavaScript
              </div>
              <div className="aboutme__skill">
                <IconTailwindCss/>Tailwind
              </div>
              <div className="aboutme__skill">
                <IconTs/>TypeScript
              </div>
              <div className="aboutme__skill">
                <IconAngular/>Angular
              </div>
              <div className="aboutme__skill">
                <IconReact/>React
              </div>
            </div>
          </article>
        </div>
      </React.Fragment>
    );
}

export default AboutMe;