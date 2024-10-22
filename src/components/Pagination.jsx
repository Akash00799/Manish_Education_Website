// src/components/Pagination.jsx
import React from "react";
import styles from "../styles/Courses.module.css";

const Pagination = ({ totalPages, currentPage, handlePageChange }) => {
  return (
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
  );
};

export default Pagination;
