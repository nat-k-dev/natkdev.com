
import React from "react";
import { useTranslation } from "react-i18next";
import "./neolook-projects.css"
import uiProjectMMCImg from "./ui-project-mmc-flyer.webp";
import angularImg from "../../../../../assets/tech/svg/angular.svg"
import tailwindImg from "../../../../../assets/tech/svg/tailwind-css.svg"
import { safariSvg, chromeSvg, edgeSvg, firefoxSvg, openNewTabIconPng } from "../../../../../assets";

function MMCFlyerProject() {
    const { t } = useTranslation();

    return (
        <article className="work-project__article mt-20">
            <section className="work-project__container work-project__container-flex-col-reverse">
                <div className="work-project__text-container">
                    <h4 className="flex gap-4 flex-col lg:flex-row">
                        {t("WORK_PROJECTS.MMC_FLYER.ProjectDescriptionTitle")}
                        <div className="font-normal text-base flex gap-0.5">
                            [ 
                            <a className="underline underline-offset-1 opacity-80 hover:opacity-100 flex items-center gap-2" href={"https://mmc.neolook.care/"} target="_blank" rel="noreferrer">
                            {t("WORK_PROJECTS.Open")}
                                <img className="h-5" src={openNewTabIconPng} alt="open in new tab icon" loading="lazy" decoding="async" />
                                <span className="-ml-1.5">]</span>
                            </a>
                        </div>
                    </h4> 
                    <p>
                        {t("WORK_PROJECTS.MMC_FLYER.ProjectDescriptionText")}
                    </p>
                    <p>{t("WORK_PROJECTS.MMC_FLYER.MyResponsibilitiesText")}</p>

                    <section className="section__tech-stack">
                        <p>{t("WORK_PROJECTS.TechStack")}</p>
                        <div className="work-project__tech-stack-list">
                            <div className="tech-stack">
                                <img src={angularImg} alt="angular icon" loading="lazy" decoding="async" />Angular
                            </div>
                            <div className="tech-stack">
                                <img src={tailwindImg} alt="tailwind icon" loading="lazy" decoding="async" />Tailwind CSS
                            </div>
                        </div>

                    </section>

                    <section className="section__browsers">
                        <p className="">{t("WORK_PROJECTS.Browsers")}</p>
                        <div className="work-project__browsers-list">
                            <img src={chromeSvg} alt="chrome icon" loading="lazy" decoding="async" />
                            <img src={edgeSvg} alt="edge icon" loading="lazy" decoding="async" />
                            <img src={safariSvg} alt="safari icon" loading="lazy" decoding="async" />
                            <img src={firefoxSvg} alt="firefox icon" loading="lazy" decoding="async" />
                        </div>
                    </section>

                </div>
                <div className="work-project__main-img">
                    <img src={uiProjectMMCImg} alt="MMC Flyer logo" loading="lazy" decoding="async" />
                </div>
            </section>
        </article>
    );
}

export default MMCFlyerProject;