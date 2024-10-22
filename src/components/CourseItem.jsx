import React from "react";
import { FaClock, FaCrown, FaStar } from "react-icons/fa";
import styles from "../styles/Courses.module.css";

const CourseItem = ({ course, handleAddToCart }) => {
  return (
    <div className={styles.courseItem}>
      {!course.isFree && (
        <div className={styles.premiumIcon}>
          <FaCrown />
        </div>
      )}
      <img
        src={course.image}
        alt={course.title}
        className={styles.courseImage}
      />
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p className={styles.duration}>
        <FaClock /> {course.duration}
      </p>
      <p className={styles.price}>
        {course.isFree ? (
          <span className={styles.freeText}>Free</span>
        ) : (
          <>
            <span className={styles.oldPrice}>${course.price}</span>
            <span className={styles.discountedPrice}>
              ${course.discountedPrice}
            </span>
          </>
        )}
      </p>
      <div className={styles.rating}>
        {Array(Math.floor(course.rating)).fill(
          <FaStar className={styles.star} />
        )}
        {course.rating % 1 !== 0 && <FaStar className={styles.halfStar} />}
        <span className={styles.ratingValue}>({course.rating})</span>
      </div>
      <button
        className={styles.addToCartButton}
        onClick={() => handleAddToCart(course)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CourseItem;
