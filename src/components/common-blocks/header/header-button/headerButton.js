import React, { useState } from "react";
import {homeDarkColor, homeLightColor} from "../../../home/main/main-constants"
import "./headerButton.css";

function HeaderButton(props) {
  const [bgColour, setBgColour] = useState(homeLightColor);
  const [textColour, setTextColour] = useState(homeDarkColor);
  const bgStyles = {
    background: `${bgColour}`,
    "borderRadius": "10px"
  };
  const textStyles = {
    color: `${textColour}`
  }

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
    <button className="header__btn" 
            id={props.id} 
            style={bgStyles}
            onClick={toggleMenu}
            onMouseEnter={() => {
                setBgColour(homeDarkColor);
                setTextColour(homeLightColor);
            }}
            onMouseLeave={() => {
              setBgColour(homeLightColor);
              setTextColour(homeDarkColor);
            }} >
        <a href={props.href} style={textStyles}>
            {props.caption}
        </a>
    </button>
  );
}

export default HeaderButton;