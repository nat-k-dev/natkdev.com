import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

function Project({cssClassName, link, caption, internalPage}) {
    const { t } = useTranslation();

    const cssClassList = ["project", cssClassName].join(' ');

    return (
        <motion.div className={cssClassList} key={link} variants={cardVariants}>
                {internalPage ? 
                    <Link to={link}>
                        <p className="project-caption_text-center">{caption}</p>
                        <div className="icon"></div>
                    </Link> :
                    <a href={link} title="Click to open in new tab" target="_blank" rel="noreferrer">
                        <p className="project-caption_text-center">{t(caption)}</p>
                        <div className="icon"></div>
                    </a>
                }
        </motion.div>
    );
}

export default Project;