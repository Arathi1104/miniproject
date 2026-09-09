const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Add Product
router.post("/add", async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      availability,
      farmer
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      category,
      image,
      availability,
      farmer
    });

    await product.save();

    res.status(201).json({
      message: "Product added successfully",
      product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to add product",
      error: error.message
    });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate(
      "farmer",
      "name email"
    );

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message
    });
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.json({
      message: "Product updated successfully",
      product
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update product",
      error: error.message
    });
  }
});

module.exports = router;