import React from "react";
import Project from "./project/project.jsx";
import {PROJECTS_INFO} from "./projects-info.js";
import "./projects.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { selfStudy } from "../../../../assets/index.js";
import { developerWorkingIcon } from "../../../../assets/index.js";
import EarlyMovesProject from "./neolook/early-moves-project.jsx"
import MMCFlyerProject from "./neolook/mmc-flyer-project.jsx";
import S2SPlatformProject from "./neolook/s2s-platform-project.jsx";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // delay between each card
    },
  },
};

function Projects() {
  const { t } = useTranslation();
  return (
    <>
      <h3 className="projects__caption">
        <img className="h-10" src={developerWorkingIcon} alt="Neolook icon" />
        {t("Workprojects")}
      </h3>
      <motion.div className="work-projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <EarlyMovesProject/>
        <MMCFlyerProject/>
        <S2SPlatformProject/>

        {/*<Project cssClassName={projectsInfo.flyerFamilyApp.cssClassName} 
                  link={projectsInfo.flyerFamilyApp.link}
                  caption={projectsInfo.flyerFamilyApp.caption}
                  internalPage={projectsInfo.flyerFamilyApp.internalPage} /> */}
      </motion.div>	
      <h3 className="projects__caption mt-10 mb-8">
      <img className="h-10" src={selfStudy} alt="Self-study icon" />
        {t("Selfstudyprojects")}
      </h3>
      <motion.div className="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
         
        <Project {...PROJECTS_INFO.biebOudersApp} /> 
        <Project {...PROJECTS_INFO.techBlogVue} /> 
        <Project {...PROJECTS_INFO.ticTakToeApp} />
        <Project {...PROJECTS_INFO.cacaoBu} /> 
        <Project {...PROJECTS_INFO.pianoles} />
        <Project {...PROJECTS_INFO.angularCargo} />
        
        <Project {...PROJECTS_INFO.parallaxTailwind} />                  
        <Project {...PROJECTS_INFO.wordpressBlog} />                  
        <Project {...PROJECTS_INFO.smartphone} />
        <Project {...PROJECTS_INFO.tributePage} />

        <Project {...PROJECTS_INFO.memoji} />  
        <Project {...PROJECTS_INFO.designSystem} /> 
        {/*<Project {...PROJECTS_INFO.binaryCalc} />*/}
      </motion.div>	
    </>
  );
}

export default Projects;