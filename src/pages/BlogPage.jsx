import React, { useMemo, Suspense } from "react";
import styles from "../styles/BlogPage.module.css";

import { blogs } from "../data/blogs";

import { useBlogs } from "../hooks/useBlogs";

const BlogPost = React.lazy(() => import("../components/BlogPost"));

const BlogPage = () => {
  const { blogData, handleLikeToggle } = useBlogs(blogs);

  const memoizedBlogList = useMemo(
    () =>
      blogData.map((blog) => (
        <Suspense fallback={<div>Loading...</div>} key={blog.id}>
          <BlogPost blog={blog} onLikeToggle={handleLikeToggle} />
        </Suspense>
      )),
    [blogData, handleLikeToggle]
  );

  return (
    <div className={styles.blogPage}>
      <h1>Company Blog</h1>

      <div className={styles.blogGrid}>{memoizedBlogList}</div>
    </div>
  );
};

export default BlogPage;
