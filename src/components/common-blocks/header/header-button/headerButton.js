import React, { useState } from "react";
import {headerDarkColor, headerLightColor, headerHoverButtonEffect, smallScreenWidth} from "../../../home/main/main-constants"
import "./headerButton.css";

function HeaderButton(props) {
  const [bgColour, setBgColour] = useState(headerLightColor);
  const [textColour, setTextColour] = useState(headerDarkColor);
  const bgStyles = {
    background: `${bgColour}`,
  };
  const textStyles = {
    color: `${textColour}`
  }

  function toggleMenu() {
    if (!window.matchMedia(`screen and (max-width: ${smallScreenWidth}px)`).matches) {
      return;
    }
    let menuBox = document.getElementById('menu-box');
    if (menuBox.style.display === 'flex'){
      menuBox.style.display = 'none';
    } else {
      menuBox.style.display = 'flex';
    };
  }

  window.addEventListener("resize", function(event) {
    let menuBox = document.getElementById('menu-box');
    if (this.window.innerWidth >= smallScreenWidth) {
      menuBox.style.display = 'flex';
    } else {
      menuBox.style.display = 'none';
    }
  })

  return (
    <button className="header__btn" 
            id={props.id} 
            style={bgStyles}
            onClick={toggleMenu}
            onMouseEnter={() => {
                setBgColour(headerHoverButtonEffect);
                setTextColour(headerDarkColor);
            }}
            onMouseLeave={() => {
              setBgColour(headerLightColor);
              setTextColour(headerDarkColor);
            }} >
        <a href={props.href} style={textStyles}>
            {props.caption}
        </a>
    </button>
  );
}

export default HeaderButton;