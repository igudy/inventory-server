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
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

// get Product
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data found",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

// updateProduct
const updateProduct = async (req, res, next) => {
  try {
    const result = await Product.updateOne(
      { _id: req.params.id },
      { data: req.body },
      { runValidators: true }
    );

    res.status(200).json({
      status: "Success",
      message: "Product update successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data update Failed",
      error: error.message,
    });
  }
};

const bulkProductUpdate = async (req, res, next) => {
  try {
    const products = [];
    for (const product of req.body.ids) {
      const result = await Product.updateOne({ _id: product.id }, product.data);
      products.push(result);
    }

    res.status(200).json({
      status: "Success",
      message: "Multiple product update successful",
      data: products, // Include the updated products in the response if needed
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Multiple product data update failed",
      error: error.message,
    });
  }
};

// delete product
const deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      res.status(400).json({
        status: "Fail",
        error: "Can't delete the product",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product data delete Failed",
      error: error.message,
    });
  }
};

// bulk-delete product
const bulkProductDelete = async (req, res, next) => {
  try {
  } catch (error) {}
};

export {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  bulkProductDelete,
  bulkProductUpdate,
};
