import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
const app = express();
dotenv.config();

// routes
import productRouter from "./routes/v1/productRouter.js";

// router
app.use("/api/v1/product", productRouter);

// If route doesnt exist on server
app.all("*", (req, res) => {
  res.send("");
});

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
