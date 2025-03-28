const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/products");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);

// Подключение к MongoDB
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB error:", err));

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
