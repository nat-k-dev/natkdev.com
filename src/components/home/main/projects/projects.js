import React from "react";
import Project from "./project/project";
import {projectsInfo} from "./projects-info";
import "./projects.css";

function Projects() {
    return (
      <div className="projects">
        <Project cssClassName={projectsInfo.cacaoBu.cssClassName} 
                  link={projectsInfo.cacaoBu.link}
                  caption={projectsInfo.cacaoBu.caption}
                  internalPage={projectsInfo.cacaoBu.internalPage} />
        <Project cssClassName={projectsInfo.pianoles.cssClassName} 
                  link={projectsInfo.pianoles.link}
                  caption={projectsInfo.pianoles.caption}
                  internalPage={projectsInfo.pianoles.internalPage} />
        <Project cssClassName={projectsInfo.techBlogVue.cssClassName} 
                  link={projectsInfo.techBlogVue.link}
                  caption={projectsInfo.techBlogVue.caption}
                  internalPage={projectsInfo.techBlogVue.internalPage} />                  
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
      </div>	
    );
}

export default Projects;