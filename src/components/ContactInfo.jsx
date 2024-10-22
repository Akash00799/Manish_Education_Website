import React from "react";
import styles from "../styles/ContactUs.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h1>Contact Us</h1>
      <h2>Need a direct line?</h2>
      <p>
        We are always available to discuss your needs. Feel free to get in touch
        using the information below or fill out the form to contact us directly.
      </p>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <span className={styles.icon}>📞</span>
          <div>
            <p>Phone</p>
            <p>(123) 456 7890</p>
          </div>
        </div>
        <div className={styles.contactItem}>
          <span className={styles.icon}>✉️</span>
          <div>
            <p>Email</p>
            <p>info@yourcompany.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
