import productSchema from "../models/productModel.js";
import mongoose from "mongoose";

const Product = mongoose.model("product", productSchema);

// get all products
const getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      status: "Success",
      message: "Product found",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

// add product
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
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

export { addProduct, getAllProducts };
