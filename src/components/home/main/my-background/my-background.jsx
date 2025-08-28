import React from "react";
import "./my-background.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../../../constants";
import { useTranslation } from "react-i18next";



const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();
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
        <div className='timeline-img-container'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='timeline-img'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold'>{t(experience.title)}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.pointsWithSubpoints.map((pointWithSubpoints, i) => (
        <li
          key={`experience-point-${i}-sub`}
          className='pl-1 tracking-wider'
        >
          {t(pointWithSubpoints.text)}
          <ul className='list-none ml-1 space-y-2'>
          {pointWithSubpoints.subpoints && pointWithSubpoints.subpoints.map((subpoint, j) => (
            <li
              key={`experience-point-${i}-sub-${j}`}
              className='pl-1 tracking-wider' 
            >
              {t(subpoint)}
            </li>
          ))}
          </ul>
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
  );
}

export default MyBackground;