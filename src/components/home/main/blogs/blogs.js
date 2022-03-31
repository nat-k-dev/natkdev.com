import React from "react";
import Blog from "./blog/blog";
import { blogsInfo } from "./blogs-info";
import "./blogs.css";

function Blogs() {
  return (
    <ul className="articles">
      <Blog cssClassName={blogsInfo.techArticleOpenSSH.cssClassName}
            href={blogsInfo.techArticleOpenSSH.href}
            caption={blogsInfo.techArticleOpenSSH.caption} />
    </ul>
  );
}

export default Blogs;