import React from "react";
import styles from "../styles/ContactUs.module.css";

const MapSection = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.786324173749!2d75.74850900839962!3d26.925306183948322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db62e4f2f3943%3A0x123456789abcde!2sYour%20Company%20Location!5e0!3m2!1sen!2sin!4v1635474331726!5m2!1sen!2sin"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapSection;
