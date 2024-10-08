const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();

connectDB();
app.use(express.json());

app.use("/api", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Perfume Shop API");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
