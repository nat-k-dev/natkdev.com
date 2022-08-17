import {smallScreenWidth} from "../../home/main/main-constants"

export function toggleMenu() {
    if (!window.matchMedia(`screen and (max-width: ${smallScreenWidth}px)`).matches) {
        return;
    }
    let menuBox = document.getElementById('menu-box');
    let header = document.querySelector('.home-page .header');
    if (menuBox.style.display === 'flex'){
    menuBox.style.display = 'none';
    header.style.borderBottomLeftRadius = '0';
    } else {
    menuBox.style.display = 'flex';
    header.style.borderBottomLeftRadius = '100px';
    };
}