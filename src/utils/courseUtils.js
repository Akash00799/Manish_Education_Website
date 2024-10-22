export const filterCourses = (courses, filters) => {
  return courses.filter((course) => {
    if (filters.category && course.category !== filters.category) return false;
    if (filters.class && course.class !== filters.class) return false;
    if (filters.rating && course.rating < filters.rating) return false;
    return true;
  });
};

export const sortCourses = (courses, sortOption) => {
  return courses.sort((a, b) => {
    if (sortOption === "newest") return new Date(b.date) - new Date(a.date);
    if (sortOption === "highestRating") return b.rating - a.rating;
    if (sortOption === "lowestPrice") return a.price - b.price;
    if (sortOption === "highestPrice") return b.price - a.price;
    return 0;
  });
};
