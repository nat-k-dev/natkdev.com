import React from "react";
import "./my-background.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../../../constants";


const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#b5eaea4d",
        color: "#2E2E2E",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #b5eaea4d" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.pointsWithSubpoints && experience.pointsWithSubpoints.map((pointWithSubpoints, index) => (
        <li
          key={`experience-point-${index}-sub`}
          className='pl-1 tracking-wider'
        >
          {pointWithSubpoints.mainPointText}
          <ul className='list-none ml-10 space-y-2'>
          {pointWithSubpoints.subpoints.map((subpoint, index) => (
            <li
              key={`experience-point-${index}-sub-${index}`}
              className='pl-1 tracking-wider'
            >
              {subpoint}
            </li>
          ))}
          </ul>
        </li>
      ))}
      </ul>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function MyBackground() {
  return (
    <div className="my-background">
      <div className="flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>

      </div>
    </div>
    /*<ul className="my-background">
      <p className="my-certificates">My certificates:</p>
      <Background cssClassName={myBackgroundInfo.courseraYaFrontend.cssClassName}
                   href={myBackgroundInfo.courseraYaFrontend.href}
                   caption={myBackgroundInfo.courseraYaFrontend.caption} />
      <Background cssClassName={myBackgroundInfo.freeCodeCampResponsiveWeb.cssClassName}
                   href={myBackgroundInfo.freeCodeCampResponsiveWeb.href}
                   caption={myBackgroundInfo.freeCodeCampResponsiveWeb.caption} />
    </ul>*/
  );
}

export default MyBackground;