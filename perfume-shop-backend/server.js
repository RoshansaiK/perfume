const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const dbURI = "mongodb://localhost:27017/perfumeShop";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

// Define a Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a Model
const Contact = mongoose.model("Contact", contactSchema);

// Define Routes
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received data:", req.body); // Log incoming data

  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error); // Log error details
    res.status(400).json({ error: "Failed to save contact." });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  // Proceed with login (e.g., generate a token)
  res.json({ message: "Login successful" });
});
