import React, { useState } from "react";
import HeaderButton from "./header-button/headerButton.jsx";
import { HEADER_BUTTONS_INFO } from "./header-buttons-info";
import "./header.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const { i18n, t } = useTranslation();
    const currentLang = i18n.language;
    const toggleLanguage = () => {
        const newLang = currentLang.includes("en") ? "nl" : "en";
        i18n.changeLanguage(newLang);
      };

    return (
        <header className="header">
            
            <h1 className="header__caption"><a href="/" className="header__caption-container">
                <img className="header__caption-icon" src="logo192.webp" alt="website icon" />
                Natalia Karaseva</a>
            </h1>
            
            <nav className="header__btns-desktop" id="menu-box">
                <HeaderButton {...HEADER_BUTTONS_INFO.aboutMe} />
                <HeaderButton {...HEADER_BUTTONS_INFO.projects} />
                <HeaderButton {...HEADER_BUTTONS_INFO.myBackground} />
                <HeaderButton {...HEADER_BUTTONS_INFO.education} />
                <HeaderButton {...HEADER_BUTTONS_INFO.contacts} />
                <span className="language-separator"></span>
                {currentLang.includes("en") ? (
                        <button onClick={toggleLanguage} className="language-toggle">🇳🇱 NL</button>
                        ) : (
                        <button onClick={toggleLanguage} className="language-toggle">🇬🇧 EN</button>
                )}
            </nav>
            {/* Mobile Dropdown */}
            <div className="header__mobile-menu relative" id="menu-btn">
                <button className="header__menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="main menu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    width="1em"
                    height="1em"
                    className="w-8 h-8"
                >
                    <path d="M3 6.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4.5h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Zm0 4.5h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5Z" />
                </svg>
                </button>
                
                {isOpen && (
                        <div className="mobile-menu__dropdown">
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} {...HEADER_BUTTONS_INFO.aboutMe} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} {...HEADER_BUTTONS_INFO.projects} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} {...HEADER_BUTTONS_INFO.myBackground} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} {...HEADER_BUTTONS_INFO.education} />
                                <HeaderButton isOpen={isOpen} setIsOpen={setIsOpen} {...HEADER_BUTTONS_INFO.contacts} />
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