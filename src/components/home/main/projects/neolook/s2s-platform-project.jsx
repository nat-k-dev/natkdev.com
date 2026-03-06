

import React from "react";
import { useTranslation } from "react-i18next";
import "./neolook-projects.css"
import s2sPlatformOverview from "./s2s-platform-overview-dark.png";
import s2sPlatformCameraDetails from "./s2s-platform-camera-details.png";
import s2sPlatformFamily from "./s2s-platform-family.png";
import angularImg from "../../../../../assets/tech/svg/angular.svg"
import tailwindImg from "../../../../../assets/tech/svg/tailwind-css.svg"
import { safariSvg, chromeSvg, edgeSvg } from "../../../../../assets";

function S2SPlatformProject() {
    const { t } = useTranslation();

    return (
        <article className="work-project__article mt-20 mb-20">
                    <section className="work-project__container">
                        <div className="work-project__main-img relative">
                            <div className="text-base text-gray-600 mb-2 ml-1">
                            {t("WORK_PROJECTS.DemoMode")}
                            </div>
                            <img className="rounded-xl border-4 shadow-md border-gray" src={s2sPlatformCameraDetails} alt="S2S Platform logo" />
                            <img className="rounded-xl border-4 shadow-xl border-gray absolute bottom-5 right-5 max-h-[50%]" src={s2sPlatformOverview} alt="S2S Platform logo" />
                            <img className="absolute -bottom-3 -right-3 max-h-[50%]" src={s2sPlatformFamily} alt="S2S Platform logo" />
                        </div>
                        <div className="work-project__text-container">
                            <h4>
                                {t("WORK_PROJECTS.S2S_PLATFORM.ProjectDescriptionTitle")}
                                <span className="confidential">{t("WORK_PROJECTS.Confidential")}</span>
                            </h4> 
                            <p>
                                {t("WORK_PROJECTS.S2S_PLATFORM.ProjectDescriptionText")}
                                <span className="link__read-more">
                                    <a href={"https://neolooksolutions.com/products/"} target="_blank" rel="noreferrer">
                                        {t("WORK_PROJECTS.ReadMore")}
                                    </a>
                                </span>
                            </p>
                            <p>{t("WORK_PROJECTS.S2S_PLATFORM.MyResponsibilitiesText")}</p>
        
                            <section className="section__tech-stack">
                                <p>{t("WORK_PROJECTS.TechStack")}</p>
                                <div className="work-project__tech-stack-list">
                                    <div className="tech-stack">
                                        <img src={angularImg} alt="angular icon" />Angular
                                    </div>
                                    <div className="tech-stack">
                                        <img src={tailwindImg} alt="tailwind icon" />Tailwind CSS
                                    </div>
                                </div>
        
                            </section>
        
                            <section className="section__browsers">
                                <p className="">{t("WORK_PROJECTS.Browsers")}</p>
                                <div className="work-project__browsers-list">
                                    <img src={chromeSvg} alt="chrome icon" />
                                    <img src={edgeSvg} alt="edge icon" />
                                    <img src={safariSvg} alt="safari icon" />
                                </div>
                            </section>
        
                        </div>
                    </section>
                </article>
    );
}

export default S2SPlatformProject;