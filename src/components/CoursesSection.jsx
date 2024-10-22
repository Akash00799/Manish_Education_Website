import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Confetti from "react-confetti";
import { FaStar, FaClock, FaCrown } from "react-icons/fa";
import { useConfetti } from "../hooks/useConfetti";

const CoursesSection = ({ coursesData, customStyles, showRating = true }) => {
  const dispatch = useDispatch();
  const { confettiVisible, triggerConfetti } = useConfetti();

  const handleAddToCart = useCallback(
    (course) => {
      dispatch(addToCart(course));
      triggerConfetti(10000);
    },
    [dispatch, triggerConfetti]
  );

  return (
    <section className={customStyles.coursesSection}>
      {confettiVisible && <Confetti style={{ width: "100%" }} />}
      <h2>Courses</h2>
      <div className={customStyles.courseGrid}>
        {coursesData.map((course) => (
          <div key={course.id} className={customStyles.courseItem}>
            {!course.isFree && (
              <div className={customStyles.premiumIcon}>
                <FaCrown />
              </div>
            )}
            <img
              src={course.image}
              alt={course.title}
              className={customStyles.courseImage}
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className={customStyles.duration}>
              <FaClock /> {course.duration}
            </p>
            <p className={customStyles.price}>
              {course.isFree ? (
                <span className={customStyles.freeText}>Free</span>
              ) : (
                <>
                  <span className={customStyles.oldPrice}>${course.price}</span>
                  <span className={customStyles.discountedPrice}>
                    ${course.discountedPrice}
                  </span>
                </>
              )}
            </p>
            {showRating && (
              <div className={customStyles.rating}>
                {Array(Math.floor(course.rating))
                  .fill()
                  .map((_, index) => (
                    <FaStar key={index} className={customStyles.star} />
                  ))}
                {course.rating % 1 !== 0 && (
                  <FaStar className={customStyles.halfStar} />
                )}
                <span className={customStyles.ratingValue}>
                  ({course.rating})
                </span>
              </div>
            )}
            <button
              className={customStyles.addToCartButton}
              onClick={() => handleAddToCart(course)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
