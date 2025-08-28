import React from "react";
import HeaderButton from "./header-button/headerButton.jsx";
import { headerButtonsInfo } from "./header-buttons-info";
import {toggleMenu} from "./toggle-menu";
import "./header.css";
import { useTranslation } from "react-i18next";

function Header() {
    const { i18n, t } = useTranslation();
    const currentLang = i18n.language;
    const toggleLanguage = () => {
        const newLang = currentLang === "en" ? "nl" : "en";
        i18n.changeLanguage(newLang);
      };

    return (
        <header className="header">
            
            <h1 className="header__caption"><a href="/" className="header__caption-container">
                <img className="header__caption-icon" src="logo192.png" alt="website icon" />
                Natalia Karaseva</a>
            </h1>
            <div className="header__mobile-menu" id="menu-btn">
              <button className="header__menu-btn" onClick={toggleMenu} aria-label="main menu"><i className="fas fa-bars"></i></button>
            </div>
            <nav className="header__btns" id="menu-box">
                <HeaderButton id={headerButtonsInfo.aboutMe.id}
                      href={headerButtonsInfo.aboutMe.href}
                      caption={headerButtonsInfo.aboutMe.caption} />
                <HeaderButton id={headerButtonsInfo.projects.id}
                      href={headerButtonsInfo.projects.href}
                      caption={headerButtonsInfo.projects.caption} />
                <HeaderButton id={headerButtonsInfo.myBackground.id}
                      href={headerButtonsInfo.myBackground.href}
                      caption={headerButtonsInfo.myBackground.caption} />
                <HeaderButton id={headerButtonsInfo.education.id}
                      href={headerButtonsInfo.education.href}
                      caption={headerButtonsInfo.education.caption} />
                <HeaderButton id={headerButtonsInfo.contacts.id}
                      href={headerButtonsInfo.contacts.href}
                      caption={headerButtonsInfo.contacts.caption} />
                <span className="language-separator"></span>
                {currentLang === "en" ? (
                        <button onClick={toggleLanguage} className="language-toggle">🇳🇱 NL</button>
                        ) : (
                        <button onClick={toggleLanguage} className="language-toggle">🇬🇧 EN</button>
                )}
            </nav>

          </header>
    );
}

export default Header;