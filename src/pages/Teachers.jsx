import React, { useMemo, useCallback } from "react";
import { FaStar } from "react-icons/fa";
import FiltersAndSort from "../components/FiltersAndSort";
import styles from "../styles/Teachers.module.css";
import CommentSection from "../components/CommentSection";

import { useFilters } from "../hooks/useFilters";
import { useSort } from "../hooks/useSort";
import { usePagination } from "../hooks/usePagination";

import { allTeachers } from "../data/teachers";

const TEACHERS_PER_PAGE = 8;

const Teachers = () => {
  const { filters, handleFilterChange } = useFilters({
    category: "",
    class: "",
    rating: 0,
  });

  const { sortOption, handleSortChange } = useSort();

  const filteredTeachers = useMemo(() => {
    return allTeachers
      .filter((teacher) => {
        if (filters.category && teacher.subject !== filters.category)
          return false;
        if (filters.class && teacher.class !== filters.class) return false;
        if (filters.rating && teacher.rating < filters.rating) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortOption === "highestRating") return b.rating - a.rating;
        if (sortOption === "mostExperience") return b.experience - a.experience;
        return 0;
      });
  }, [filters, sortOption]);

  const {
    currentItems: currentTeachers,
    totalPages,
    currentPage,
    handlePageChange,
  } = usePagination(filteredTeachers, TEACHERS_PER_PAGE);

  const handlePageChangeMemo = useCallback(
    (pageNumber) => {
      handlePageChange(pageNumber);
    },
    [handlePageChange]
  );

  return (
    <div className={styles.teachersContainer}>
      <FiltersAndSort
        filters={filters}
        handleFilterChange={handleFilterChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
        categories={["Mathematics", "Physics"]}
        classes={["11th", "12th"]}
        ratings={[4.0, 4.5, 5.0]}
        sortOptions={[
          { value: "highestRating", label: "Highest Rating" },
          { value: "mostExperience", label: "Most Experience" },
        ]}
      />

      <h1>All Teachers</h1>

      <section className={styles.teachersSection}>
        <div className={styles.teacherGrid}>
          {currentTeachers.map((teacher) => (
            <div key={teacher.id} className={styles.teacherItem}>
              <img
                src={teacher.image}
                alt={teacher.name}
                className={styles.teacherImage}
                loading="lazy"
              />
              <h3>{teacher.name}</h3>
              <p>{teacher.qualification}</p>
              <p>Subject: {teacher.subject}</p>
              <p>Class: {teacher.class}</p>
              <p>Experience: {teacher.experience} years</p>
              <div className={styles.rating}>
                {Array(Math.floor(teacher.rating)).fill(
                  <FaStar className={styles.star} />
                )}
                {teacher.rating % 1 !== 0 && (
                  <FaStar className={styles.halfStar} />
                )}
                <span className={styles.ratingValue}>({teacher.rating})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`${styles.pageButton} ${
              currentPage === i + 1 ? styles.activePageButton : ""
            }`}
            onClick={() => handlePageChangeMemo(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <CommentSection />
    </div>
  );
};

export default Teachers;
