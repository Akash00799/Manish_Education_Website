import React from "react";
import ContactInfo from "../components/ContactInfo";
import MapSection from "../components/MapSection";
import ContactForm from "../components/ContactForm";
import { useForm } from "../hooks/useForm";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  const { formData, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
    website: "",
    pdfFile: null,
    comment: "",
  });

  const onSubmitForm = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className={styles.contactUsContainer}>
      <ContactInfo />

      <MapSection />

      <ContactForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit(onSubmitForm)}
      />
    </div>
  );
};

export default ContactUs;
