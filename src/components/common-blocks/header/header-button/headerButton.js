import React, { useState } from "react";
import {headerLightColor, headerHoverButtonEffect, smallScreenWidth} from "../../../home/main/main-constants";
import { toggleMenu } from "../toggle-menu";
import "./headerButton.css";

function HeaderButton(props) {
  const [bgColour, setBgColour] = useState(headerLightColor);
  const bgStyles = {
    background: `${bgColour}`,
  };

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
            }}
            onMouseLeave={() => {
              setBgColour(headerLightColor);
            }} >
        <a href={props.href}>
            {props.caption}
        </a>
    </button>
  );
}

export default HeaderButton;