import { useState } from "react";

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (submitCallback) => (e) => {
    e.preventDefault();
    submitCallback(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
