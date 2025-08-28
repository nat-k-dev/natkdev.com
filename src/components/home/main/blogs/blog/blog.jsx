import React from "react";
import "./blog.css";

function Blog(props) {
  const cssClassName = ["article", props.cssClassName].join(" ");
  return (
      <li className={cssClassName}>
        <p className="caption" title="Click to open in new tab">
          <a href={props.href} target="_blank" rel="noreferrer">
            {props.caption}
          </a>
        </p>
      </li>
  );
}

export default Blog;