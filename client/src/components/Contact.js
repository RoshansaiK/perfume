import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa"; // Importing icons

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");
    setLoading(true);

    if (!validateForm()) {
      setErrorMessage("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      setSuccessMessage(response.data.message);
      setErrorMessage("");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrorMessage("Failed to save contact. Please try again.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <div className="input-icon">
            <FaUser />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <div className="input-icon">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Message:</label>
          <div className="input-icon">
            <FaComment />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Contact;
