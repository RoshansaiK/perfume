import React, { useState } from "react";
import axios from "axios";

const CreateAdmin = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/create",
        formData
      );
      setMessage(response.data.message); // Display success message
    } catch (error) {
      // Check for specific error messages returned by the server
      const errorMessage =
        error.response?.data?.message || "Error creating admin.";
      setMessage(errorMessage);
    }
  };

  return (
    <div>
      <h2>Create Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Create Admin</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateAdmin;
