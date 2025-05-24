import React from "react";
import Project from "./project/project";
import {projectsInfo} from "./projects-info";
import "./projects.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // delay between each card
    },
  },
};

function Projects() {
    return (
      <motion.div className="projects"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
         
        <Project cssClassName={projectsInfo.biebOudersApp.cssClassName} 
                  link={projectsInfo.biebOudersApp.link}
                  caption={projectsInfo.biebOudersApp.caption}
                  internalPage={projectsInfo.biebOudersApp.internalPage} /> 
        <Project cssClassName={projectsInfo.flyerFamilyApp.cssClassName} 
                  link={projectsInfo.flyerFamilyApp.link}
                  caption={projectsInfo.flyerFamilyApp.caption}
                  internalPage={projectsInfo.flyerFamilyApp.internalPage} /> 
        <Project cssClassName={projectsInfo.techBlogVue.cssClassName} 
                  link={projectsInfo.techBlogVue.link}
                  caption={projectsInfo.techBlogVue.caption}
                  internalPage={projectsInfo.techBlogVue.internalPage} />          
        <Project cssClassName={projectsInfo.cacaoBu.cssClassName} 
                  link={projectsInfo.cacaoBu.link}
                  caption={projectsInfo.cacaoBu.caption}
                  internalPage={projectsInfo.cacaoBu.internalPage} />
        <Project cssClassName={projectsInfo.pianoles.cssClassName} 
                  link={projectsInfo.pianoles.link}
                  caption={projectsInfo.pianoles.caption}
                  internalPage={projectsInfo.pianoles.internalPage} />
        <Project cssClassName={projectsInfo.angularCargo.cssClassName} 
                  link={projectsInfo.angularCargo.link}
                  caption={projectsInfo.angularCargo.caption}
                  internalPage={projectsInfo.angularCargo.internalPage} />
        <Project cssClassName={projectsInfo.parallaxTailwind.cssClassName} 
                  link={projectsInfo.parallaxTailwind.link}
                  caption={projectsInfo.parallaxTailwind.caption}
                  internalPage={projectsInfo.parallaxTailwind.internalPage} />                  
        <Project cssClassName={projectsInfo.wordpressBlog.cssClassName} 
                  link={projectsInfo.wordpressBlog.link}
                  caption={projectsInfo.wordpressBlog.caption}
                  internalPage={projectsInfo.wordpressBlog.internalPage} />                  
        <Project cssClassName={projectsInfo.smartphone.cssClassName} 
                  link={projectsInfo.smartphone.link}
                  caption={projectsInfo.smartphone.caption}
                  internalPage={projectsInfo.smartphone.internalPage} />
        <Project cssClassName={projectsInfo.tributePage.cssClassName} 
                  link={projectsInfo.tributePage.link}
                  caption={projectsInfo.tributePage.caption}
                  internalPage={projectsInfo.tributePage.internalPage} />

        <Project cssClassName={projectsInfo.memoji.cssClassName} 
                  link={projectsInfo.memoji.link}
                  caption={projectsInfo.memoji.caption}
                  internalPage={projectsInfo.memoji.internalPage} />  
        <Project cssClassName={projectsInfo.designSystem.cssClassName} 
                  link={projectsInfo.designSystem.link}
                  caption={projectsInfo.designSystem.caption}
                  internalPage={projectsInfo.designSystem.internalPage} /> 
        {/*<Project cssClassName={projectsInfo.binaryCalc.cssClassName} 
                  link={projectsInfo.binaryCalc.link}
                  caption={projectsInfo.binaryCalc.caption}
                  internalPage={projectsInfo.binaryCalc.internalPage} /> */}
      </motion.div>	
    );
}

export default Projects;