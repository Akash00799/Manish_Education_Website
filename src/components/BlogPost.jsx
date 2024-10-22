import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import styles from "../styles/BlogPost.module.css";

const BlogPost = ({ blog, onLikeToggle }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <div className={styles.blogPost}>
      <img src={blog.image} alt={blog.title} className={styles.blogImage} />
      <h3>{blog.title}</h3>
      <p>{showFullContent ? blog.fullContent : blog.content}</p>

      {showFullContent ? (
        <button
          onClick={() => setShowFullContent(false)}
          className={styles.seeMoreButton}
        >
          See Less
        </button>
      ) : (
        <button
          onClick={() => setShowFullContent(true)}
          className={styles.seeMoreButton}
        >
          See More
        </button>
      )}

      <div className={styles.likeSection}>
        <button
          onClick={() => onLikeToggle(blog.id)}
          className={blog.likedByUser ? styles.liked : styles.notLiked}
        >
          <FaThumbsUp /> {blog.likes}
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
