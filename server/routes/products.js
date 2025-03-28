const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Получить все товары
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Добавить товар (для админки)
router.post("/", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
