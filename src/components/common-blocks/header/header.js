import React from "react";
import "./header.css";

function Header() {
    function toggleMenu() {
        if (!window.matchMedia("screen and (max-width: 780px)").matches) {
          return;
        }
        let menuBox = document.getElementById('menu-box');
        if (menuBox.style.display === 'flex'){
          menuBox.style.display = 'none';
        } else {
          menuBox.style.display = 'flex';
        };
    }

    return (
        <header className="header">
            <h1 className="header__caption"><a href="/">nat-k-dev</a></h1>
            <div className="header__mobile-menu" id="menu-btn">
              <button className="header__menu-btn" onClick={toggleMenu}><i className="fas fa-bars"></i></button>
            </div>
            <nav className="header__btns" id="menu-box">
              <button className="header__btn" onClick={toggleMenu} id="header-btn-about"><a href="#aboutme">About me</a></button>
              <button className="header__btn" onClick={toggleMenu} id="header-btn-projects"><a href="#projects">Projects</a></button>
              <button className="header__btn" onClick={toggleMenu} id="header-btn-learning"><a href="#learning">Learning</a></button>
              <button className="header__btn" onClick={toggleMenu} id="header-btn-blog"><a href="#blog">Blog</a></button>
              <button className="header__btn" onClick={toggleMenu} id="header-btn-contacts"><a href="#contacts">Contacts</a></button>
            </nav>
          </header>
    );
}

export default Header;