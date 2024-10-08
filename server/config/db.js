const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/perfume-shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully to perfume-shop");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit if connection fails
  }
};

module.exports = connectDB;
