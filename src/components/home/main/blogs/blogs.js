import React from "react";
import Blog from "./blog/blog";
import { blogsInfo } from "./blogs-info";
import "./blogs.css";

function Blogs() {
  return (
    <ul className="mx-auto list-disc max-w-max">
      <Blog cssClassName={blogsInfo.techArticleBrowserCookies.cssClassName}
            href={blogsInfo.techArticleBrowserCookies.href}
            caption={blogsInfo.techArticleBrowserCookies.caption} />
      <Blog cssClassName={blogsInfo.techArticleHowBrowserParsesWebpage.cssClassName}
            href={blogsInfo.techArticleHowBrowserParsesWebpage.href}
            caption={blogsInfo.techArticleHowBrowserParsesWebpage.caption} />
      <Blog cssClassName={blogsInfo.techArticleOpenSSH.cssClassName}
            href={blogsInfo.techArticleOpenSSH.href}
            caption={blogsInfo.techArticleOpenSSH.caption} />
    </ul>
  );
}

export default Blogs;