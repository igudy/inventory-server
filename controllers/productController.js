import productSchema from "../models/productModel.js";
import mongoose from "mongoose";

const Product = mongoose.model("product", productSchema);

const addProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.status(200).json({
      status: "success",
      message: "Data created",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      stats: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

export { addProduct };
