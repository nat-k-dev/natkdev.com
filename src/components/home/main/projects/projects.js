import React from "react";
import Project from "./project/project";
import {projectsInfo} from "./projects-info";
import "./projects.css";

function Projects() {
    return (
      <div className="projects">
        <Project cssClassName={projectsInfo.messier.cssClassName} 
                  link={projectsInfo.messier.link}
                  caption={projectsInfo.messier.caption}
                  internalPage={projectsInfo.messier.internalPage} />
        <Project cssClassName={projectsInfo.hadnDadn.cssClassName} 
                  link={projectsInfo.hadnDadn.link}
                  caption={projectsInfo.hadnDadn.caption}
                  internalPage={projectsInfo.hadnDadn.internalPage} />
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
        <Project cssClassName={projectsInfo.binaryCalc.cssClassName} 
                  link={projectsInfo.binaryCalc.link}
                  caption={projectsInfo.binaryCalc.caption}
                  internalPage={projectsInfo.binaryCalc.internalPage} /> 
        <Project cssClassName={projectsInfo.designSystem.cssClassName} 
                  link={projectsInfo.designSystem.link}
                  caption={projectsInfo.designSystem.caption}
                  internalPage={projectsInfo.designSystem.internalPage} /> 
        <Project cssClassName={projectsInfo.sportmaster.cssClassName} 
                  link={projectsInfo.sportmaster.link}
                  caption={projectsInfo.sportmaster.caption}
                  internalPage={projectsInfo.sportmaster.internalPage} />                                                        
        
      </div>	
    );
}

export default Projects;