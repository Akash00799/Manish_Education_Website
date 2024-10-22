import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <a href="/">MK Classes</a>
      </div>
      <ul className={styles.footerLinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Courses</a>
        </li>
        <li>
          <a href="#teachers">Teachers</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <li>
          <a href="#about-us">About Us</a>
        </li>
      </ul>
      <div className={styles.socialMedia}>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
      <div className={styles.copyRight}>
        © 2024 MK Classes. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
