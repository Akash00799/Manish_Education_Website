import { parseDate } from "./dateUtils";

export const sortCourses = (courses, sortOption) => {
  return courses.sort((a, b) => {
    if (sortOption === "newest") return parseDate(b.date) - parseDate(a.date);
    if (sortOption === "highestRating") return b.rating - a.rating;
    if (sortOption === "lowestPrice") return a.price - b.price;
    if (sortOption === "highestPrice") return b.price - a.price;
    return 0;
  });
};
