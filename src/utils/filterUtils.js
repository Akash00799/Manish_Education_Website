export const filterCourses = (courses, filters) => {
  return courses.filter((course) => {
    if (filters.category && course.category !== filters.category) return false;
    if (filters.class && course.class !== filters.class) return false;
    if (filters.rating && course.rating < filters.rating) return false;
    return true;
  });
};
