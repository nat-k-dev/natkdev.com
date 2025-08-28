import React, { useState } from "react";
import HeaderButton from "./header-button/headerButton.jsx";
import { headerButtonsInfo } from "./header-buttons-info";
import "./header.css";
import { useTranslation } from "react-i18next";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
            
            <nav className="header__btns-desktop" id="menu-box">
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
            {/* Mobile Dropdown */}
            <div className="header__mobile-menu relative" id="menu-btn">
                <button className="header__menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="main menu"><i className="fas fa-bars"></i></button>
                
                {isOpen && (
                        <div className="mobile-menu__dropdown">
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} id={headerButtonsInfo.aboutMe.id}
                                        href={headerButtonsInfo.aboutMe.href}
                                        caption={headerButtonsInfo.aboutMe.caption} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} id={headerButtonsInfo.projects.id}
                                        href={headerButtonsInfo.projects.href}
                                        caption={headerButtonsInfo.projects.caption} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} id={headerButtonsInfo.myBackground.id}
                                        href={headerButtonsInfo.myBackground.href}
                                        caption={headerButtonsInfo.myBackground.caption} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} id={headerButtonsInfo.education.id}
                                        href={headerButtonsInfo.education.href}
                                        caption={headerButtonsInfo.education.caption} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} id={headerButtonsInfo.contacts.id}
                                        href={headerButtonsInfo.contacts.href}
                                        caption={headerButtonsInfo.contacts.caption} />
                                <span className="language-separator separartor-vertical"></span>
                                {currentLang === "en" ? (
                                        <button onClick={toggleLanguage} className="language-toggle">🇳🇱 NL</button>
                                        ) : (
                                        <button onClick={toggleLanguage} className="language-toggle">🇬🇧 EN</button>
                                )}
                        </div>
                )}
            </div>
            <div className={`backgroun-overlay ${isOpen ? "block" : "hidden"}`} 
                onClick={() => setIsOpen(!isOpen)}
            ></div> 

          </header>
    );
}

export default Header;