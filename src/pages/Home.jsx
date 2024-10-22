import React from "react";
import CoursesSection from "../components/CoursesSection";
import {
  FaComments,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { allCourses } from "../data/courses";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <h1>Welcome to MK Classes</h1>
        <p>Master the skills you need for the future</p>
        <button className={styles.ctaButton}>Get Started</button>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <div className={styles.featureIconWrapper}>
            <FaChalkboardTeacher />
          </div>
          <h2>Expert Teachers</h2>
          <p>Learn from industry experts with real-world experience.</p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconWrapper}>
            <FaBookOpen />
          </div>
          <h2>Comprehensive Courses</h2>
          <p>Wide range of courses covering various subjects.</p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIconWrapper}>
            <FaUsers />
          </div>
          <h2>Community Support</h2>
          <p>Join a community of learners and get help when you need it.</p>
        </div>
      </section>

      <CoursesSection
        coursesData={allCourses}
        customStyles={styles}
        showRating={false}
      />

      <section className={styles.testimonialsSection}>
        <h2>What our students say</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialItem}>
            <p>"MK Classes helped me land my dream job!"</p>
            <h4>- Jane Doe</h4>
          </div>
          <div className={styles.testimonialItem}>
            <p>"The best online learning platform I have ever used."</p>
            <h4>- John Smith</h4>
          </div>
        </div>
      </section>

      <Link to="/chat">
        <div className={styles.chatIcon}>
          <FaComments size={30} />
        </div>
      </Link>
    </div>
  );
};

export default Home;