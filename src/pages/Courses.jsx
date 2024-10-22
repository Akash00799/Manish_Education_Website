import React, { useMemo } from "react";
import FiltersAndSort from "../components/FiltersAndSort";
import { useFilters } from "../hooks/useFilters";
import { useSort } from "../hooks/useSort";
import { usePagination } from "../hooks/usePagination";
import AdvertisementCarousel from "../components/AdvertisementCarousel";
import { allCourses } from "../data/courses";
import { futureAdvertisements } from "../data/advertisements";
import CoursesSection from "../components/CoursesSection";
import styles from "../styles/Courses.module.css";

const COURSES_PER_PAGE = 16;

const Courses = () => {
  const { filters, handleFilterChange } = useFilters({
    category: "",
    class: "",
    rating: 0,
  });
  const { sortOption, handleSortChange } = useSort();

  const sortedAndFilteredCourses = useMemo(() => {
    return allCourses
      .filter((course) => {
        if (filters.category && course.category !== filters.category)
          return false;
        if (filters.class && course.class !== filters.class) return false;
        if (filters.rating && course.rating < filters.rating) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortOption === "newest") return new Date(b.date) - new Date(a.date);
        if (sortOption === "highestRating") return b.rating - a.rating;
        if (sortOption === "lowestPrice") return a.price - b.price;
        if (sortOption === "highestPrice") return b.price - a.price;
        return 0;
      });
  }, [filters, sortOption]);

  const {
    currentItems: currentCourses,
    totalPages,
    currentPage,
    handlePageChange,
  } = usePagination(sortedAndFilteredCourses, COURSES_PER_PAGE);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
  };

  return (
    <div className={styles.coursesContainer}>
      <FiltersAndSort
        filters={filters}
        handleFilterChange={handleFilterChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        categories={["Frontend Development", "Backend Development"]}
        classes={["11th", "12th"]}
        ratings={[3, 4, 5]}
      />

      <AdvertisementCarousel
        advertisements={futureAdvertisements}
        settings={settings}
      />

      <CoursesSection
        coursesData={currentCourses}
        customStyles={styles}
        showRating={true}
      />

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles.pageButton} ${
              currentPage === i + 1 ? styles.activePageButton : ""
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Courses;
