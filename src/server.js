const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const storeRouter = require("./routes/store.router");
const userRouter = require("./routes/userRouter");

app.get("/", (req, res) => {
  res.send("<h1>Inventory API</h1>");
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/store", storeRouter);

const port = process.env.PORT || 3002;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

// Code written by Goodness Igunma

start();
