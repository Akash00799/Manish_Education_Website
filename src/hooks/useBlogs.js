import { useState, useCallback } from "react";
import { toggleLike } from "../utils/toggleUtils";

export const useBlogs = (initialBlogs) => {
  const [blogData, setBlogData] = useState(initialBlogs);

  const handleLikeToggle = useCallback((blogId) => {
    setBlogData((prevBlogs) => toggleLike(prevBlogs, blogId));
  }, []);

  return { blogData, handleLikeToggle };
};
