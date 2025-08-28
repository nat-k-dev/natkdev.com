import React, { useState } from "react";
import {headerLightColor, headerHoverButtonEffect, smallScreenWidth} from "../../../home/main/main-constants";
import "./headerButton.css";
import { useTranslation } from "react-i18next";

function HeaderButton(props) {
  const { t } = useTranslation();
  const { id, href, caption, isOpen = false, setIsOpen } = props;
  const [bgColour, setBgColour] = useState(headerLightColor);
  const bgStyles = {
    background: `${bgColour}`,
  };

  window.addEventListener("resize", function(event) {
    let menuBox = document.getElementById('menu-box');
    if (this.window.innerWidth > smallScreenWidth) {
      menuBox.style.display = 'flex';
    } else {
      menuBox.style.display = 'none';
    }
  })

  return (
    <button className="header__btn" 
            id={props.id} 
            style={bgStyles}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={() => {
                setBgColour(headerHoverButtonEffect);
            }}
            onMouseLeave={() => {
              setBgColour(headerLightColor);
            }} >
        <a href={props.href} className="text-nowrap">
            {t(props.caption)}
        </a>
    </button>
  );
}

export default HeaderButton;