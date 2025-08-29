
import React from "react";
import { useTranslation } from "react-i18next";
import "./neolook-projects.css"
import uiProjecteearlyMoves from "./ui-project-early-moves.png";
import angularImg from "../../../../../assets/tech/svg/angular.svg"
import tailwindImg from "../../../../../assets/tech/svg/tailwind-css.svg"
import { safariSvg, chromeSvg, firefoxSvg, edgeSvg, recordRtcPng, cronitorPng } from "../../../../../assets";


function EarlyMovesProject() {
    const { t } = useTranslation();

    return (
        <article className="work-project__article">
            <section className="work-project__container">
                <div className="work-project__main-img">
                    <img src={uiProjecteearlyMoves} alt="EarlyMoves logo" />
                </div>
                <div className="work-project__text-container">
                    <h4>
                        {t("WORK_PROJECTS.EARLY_MOVES.ProjectDescriptionTitle")}
                        <span className="confidential">{t("WORK_PROJECTS.Confidential")}</span>
                    </h4> 
                    <p>
                        {t("WORK_PROJECTS.EARLY_MOVES.ProjectDescriptionText")}
                        <span className="link__read-more">
                            <a href={"https://neolooksolutions.com/earlymoves/"} target="_blank" rel="noreferrer">
                                {t("WORK_PROJECTS.ReadMore")}
                            </a>
                        </span>
                    </p>
                    <p>{t("WORK_PROJECTS.EARLY_MOVES.MyResponsibilitiesText")}</p>

                    <section className="section__tech-stack">
                        <p>{t("WORK_PROJECTS.TechStack")}</p>
                        <div className="work-project__tech-stack-list">
                            <div className="tech-stack">
                                <img src={angularImg} alr="angular icon" />Angular
                            </div>
                            <div className="tech-stack">
                                <img src={tailwindImg} alr="tailwind icon" />Tailwind CSS
                            </div>
                            {/*<div className="tech-stack">
                                <img src={recordRtcPng} alr="recordRTC icon" />RecordRTC
                            </div>
                            <div className="tech-stack">
                                <img src={cronitorPng} alr="cronitor icon" />Cronitor
                            </div>*/}
                        </div>

                    </section>

                    <section className="section__browsers">
                        <p className="">{t("WORK_PROJECTS.Browsers")}</p>
                        <div className="work-project__browsers-list">
                            <img src={chromeSvg} alr="chrome icon" />
                            <img src={edgeSvg} alr="edge icon" />
                            <img src={safariSvg} alr="safari icon" />
                            <img src={firefoxSvg} alr="firefox icon" />
                        </div>
                    </section>

                </div>
            </section>
        </article>
    );
}

export default EarlyMovesProject;