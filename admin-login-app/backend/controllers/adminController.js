const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Remove hashing for the password as requested
    const admin = new Admin({ username, password });
    await admin.save();
    return res.status(201).json({ message: "Admin created successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
    }

    // Compare the password without hashing
    if (password !== admin.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createAdmin, loginAdmin };
