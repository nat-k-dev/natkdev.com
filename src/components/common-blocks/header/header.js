import React from "react";
import HeaderButton from "./header-button/headerButton";
import { headerButtonsInfo } from "./header-buttons-info";
import {toggleMenu} from "./toggle-menu";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="header__caption"><a href="/">Natalia Karaseva</a></h1>
            <div className="header__mobile-menu" id="menu-btn">
              <button className="header__menu-btn" onClick={toggleMenu} ariaLabel="main menu"><i className="fas fa-bars"></i></button>
            </div>
            <nav className="header__btns" id="menu-box">
              <HeaderButton id={headerButtonsInfo.aboutMe.id}
                      href={headerButtonsInfo.aboutMe.href}
                      caption={headerButtonsInfo.aboutMe.caption} />
              <HeaderButton id={headerButtonsInfo.projects.id}
                      href={headerButtonsInfo.projects.href}
                      caption={headerButtonsInfo.projects.caption} />
              <HeaderButton id={headerButtonsInfo.certificates.id}
                      href={headerButtonsInfo.certificates.href}
                      caption={headerButtonsInfo.certificates.caption} />
              <HeaderButton id={headerButtonsInfo.blogs.id}
                      href={headerButtonsInfo.blogs.href}
                      caption={headerButtonsInfo.blogs.caption} />
              <HeaderButton id={headerButtonsInfo.contacts.id}
                      href={headerButtonsInfo.contacts.href}
                      caption={headerButtonsInfo.contacts.caption} />
            </nav>
          </header>
    );
}

export default Header;