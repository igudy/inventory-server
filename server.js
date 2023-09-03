import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productSchema from "./models/productModel";
productSchema;

const app = express();
dotenv.config();

// Server homepage
app.get("/", (req, res) => {
  res.send("<h1>Inventory API</h1>");
});

// Port
const port = process.env.PORT || 3001;

// Connect to mongodb
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
