import React from "react";
import { Link } from "react-router-dom";
import "./project.css";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

function Project(props) {

    const cssClassName = ["project", props.cssClassName].join(' ');

    return (
        <motion.div className={cssClassName} key={props.link} variants={cardVariants}>
                {props.internalPage ? 
                    <Link to={props.link}>
                        <p className="caption project-caption_text-center">{props.caption}</p>
                        <div className="icon"></div>
                    </Link> :
                    <a href={props.link} title="Click to open in new tab" target="_blank" rel="noreferrer">
                        <p className="caption project-caption_text-center">{props.caption}</p>
                        <div className="icon"></div>
                    </a>
                }
        </motion.div>
    );
}

export default Project;