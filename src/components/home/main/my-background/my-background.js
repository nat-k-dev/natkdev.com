import React from "react";
import Background from "./background/background";
import {myBackgroundInfo} from "./my-background-info";
import "./my-background.css";

function MyBackground() {
  return (
    <ul className="my-background">
      <p className="my-certificates">My certificates:</p>
      <Background cssClassName={myBackgroundInfo.courseraYaFrontend.cssClassName}
                   href={myBackgroundInfo.courseraYaFrontend.href}
                   caption={myBackgroundInfo.courseraYaFrontend.caption} />
      <Background cssClassName={myBackgroundInfo.freeCodeCampResponsiveWeb.cssClassName}
                   href={myBackgroundInfo.freeCodeCampResponsiveWeb.href}
                   caption={myBackgroundInfo.freeCodeCampResponsiveWeb.caption} />
    </ul>
  );
}

export default MyBackground;