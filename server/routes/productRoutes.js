const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get a product by ID
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a new product
router.post("/products", async (req, res) => {
  const { name, description, price, image, sizes } = req.body;

  try {
    const newProduct = new Product({ name, description, price, image, sizes });
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

// Update a product
router.put("/products/:id", async (req, res) => {
  const { name, description, price, image, sizes } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, image, sizes },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: "Bad request" });
  }
});

// Delete a product
router.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
