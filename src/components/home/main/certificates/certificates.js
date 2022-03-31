import React from "react";
import Certificate from "./certificate/certificate";
import {certificatesInfo} from "./certificates-info";
import "./certificates.css";

function Certificates() {
  return (
    <ul className="certificates">
      <Certificate cssClassName={certificatesInfo.courseraYaFrontend.cssClassName}
                   href={certificatesInfo.courseraYaFrontend.href}
                   caption={certificatesInfo.courseraYaFrontend.caption} />
      <Certificate cssClassName={certificatesInfo.freeCodeCampResponsiveWeb.cssClassName}
                   href={certificatesInfo.freeCodeCampResponsiveWeb.href}
                   caption={certificatesInfo.freeCodeCampResponsiveWeb.caption} />
    </ul>
  );
}

export default Certificates;